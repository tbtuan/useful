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
  color: ${({ theme }) => theme.colors.text};
`;

const SearchBox = styled("input")`
  font-size: 0.8rem;
  line-height: 1.8rem;

  border-width: 0 0 2px;
  border-color: ${({ theme }) => theme.colors.text};
  outline: 0;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  padding-left: 2rem;
  :focus {
    border-color: ${({ theme }) => theme.colors.link};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.text};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.text};
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

function useFocus(ref, handler) {
  useEffect(() => {
    const handleKeyOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target) && e.key === "f") {
        handler();
      }
    };
    // Bind the event listener
    document.addEventListener("keyup", handleKeyOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("keyup", handleKeyOutside);
    };
  }, [ref]);
}

function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
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

function useDatafetch(query, setResults) {
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

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [focus, setFocus] = useState(false);

  useFocus(ref, () => document.getElementById("searchbox").focus());
  useClickOutside(ref, () => setFocus(false));
  useDatafetch(query, setResults);

  const searchData = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
    }
  };

  return (
    <SearchContainer ref={ref}>
      <SearchBox
        id="searchbox"
        type="Search"
        value={query}
        onChange={searchData}
        onFocus={() => setFocus(true)}
        onKeyUp={handleKeyPress}
        placeholder="Search..."
        autoComplete="false"
      />
      <StyledSearch />
      <HitsWrapper show={results.length > 0 && focus}>
        {results.map(({ item }) => {
          return (
            <ul key={item.id}>
              <li>{item.title}</li>
              <li>
                <Link
                  onClick={() => {
                    setQuery("");
                    setFocus(false);
                  }}
                  to={`${item.url}`}
                >
                  {item.url}
                </Link>
              </li>
            </ul>
          );
        })}
      </HitsWrapper>
    </SearchContainer>
  );
};
export default SearchLayout;
