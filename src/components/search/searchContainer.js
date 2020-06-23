import React, { useEffect, useState, createRef, useRef } from "react";
import styled from "@emotion/styled";
import { Search } from "emotion-icons/fa-solid";
import Fuse from "fuse.js";
import Link from "../link";
import config from "../../../config";

const StyledSearch = styled(Search)`
  position: relative;
  bottom: 1.7rem;
  left: 0.5rem;
  width: 16px;
  height: 16px;
`;

const SearchBox = styled("input")`
  font-size: 0.8rem;
  line-height: 1.8rem;

  border-width: 0 0 2px;
  outline: 0;
  border-color: ${({ theme }) => theme.colors.text};
  width: 100%;
  padding-left: 2rem;
  :focus {
    border-color: ${({ theme }) => theme.colors.link};
  }
`;

const SearchContainer = styled("div")`
  margin-top: 6px;
`;

const HitsWrapper = styled.div`
  display: ${(props) => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  z-index: 2;
  right: 0;
  top: calc(100% + 0.5em);
  width: 40vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;

  border-radius: ${(props) => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 1px solid ${(props) => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${(props) => props.theme.lightGray};
  }
  * {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
  }
  mark {
    color: ${(props) => props.theme.lightBlue};
    background: ${(props) => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: black;
      background: ${(props) => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${(props) => props.theme.smallBorderRadius};
    }
  }
  h3 {
    color: black;
    margin: 0 0 0.5em;
  }
  h4 {
    color: black;
    margin-bottom: 0.3em;
  }
`;

function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function useDatafetch(query, [results, setResults]) {
  useEffect(() => {
    if (window.__FUSE__) {
      const fuse = new Fuse(window.__FUSE__, {
        findAllMatches: true,
        keys: ["id", "title", "url", "rawBody"],
      });
      const results = fuse.search(query).slice(0, 5);
      setResults(results);
    }
  }, [query]);
}

const SearchLayout = () => {
  const ref = useRef(null);
  //const ref = createRef();

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [focus, setFocus] = useState(false);

  useClickOutside(ref, () => setFocus(false));
  useDatafetch(query, [results, setResults]);

  const searchData = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div ref={ref}>
      <SearchContainer>
        <SearchBox
          type="Search"
          value={query}
          onChange={searchData}
          onFocus={() => setFocus(true)}
          placeholder="Search..."
        />
        <StyledSearch />
        <HitsWrapper show={results.length > 0 && focus}>
          {results.map(({ item }) => {
            return (
              <ul key={item.id}>
                <li>{item.title}</li>
                <li>
                  <Link to={`${item.url}`}>{item.url}</Link>
                </li>
              </ul>
            );
          })}
        </HitsWrapper>
      </SearchContainer>
    </div>
  );
};
export default SearchLayout;
