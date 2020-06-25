import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "@emotion/styled";
import { Search } from "emotion-icons/fa-solid";
import Fuse from "fuse.js";
import Link from "../link";
import GatsbyLink from "gatsby-link";

const StyledSearch = styled(Search)`
  position: relative;
  bottom: 1.7rem;
  left: 0.5rem;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const SearchBox = styled("input")`
  font-size: 1rem;
  line-height: 2rem;

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

  :hover {
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
  // grid-template-columns: 1fr 1fr;
  max-height: 80vh;
  z-index: 2;
  right: 0;
  top: calc(100% + 0.5em);
  width: 40vw;
  max-width: 30em;
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.searchShadow});
  padding: 1rem;
  background: white;

  border-radius: 4px;
  > * + * {
    padding-top: 1rem !important;
    border-top: 1px solid ${({ theme }) => theme.darkGray};
  }
  * {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
  }
`;

const Hits = styled("li")`
  font-weight: 700;
`;

const SearchLink = styled(GatsbyLink)`
  color: ${({ theme }) => theme.colors.text};
  list-style: none;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0;

  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.searchHover : `transparent`};
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

function useDatafetch(query, setResults, [itemIndex, setItemIndex]) {
  useEffect(() => {
    if (window.__FUSE__) {
      const fuse = new Fuse(window.__FUSE__, {
        findAllMatches: true,
        keys: ["id", "title", "url", "toc"],
      });
      const results = fuse.search(query).slice(0, 5);
      setResults(results);
      // To keep the selection inside the bounds while typing
      if (results && itemIndex > results.length - 1) {
        setItemIndex(0);
      }
    }
  }, [query]);
}

const SearchLayout = () => {
  const ref = useRef(null);

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  useFocus(ref, () => document.getElementById("searchbox").focus());
  useClickOutside(ref, () => setFocus(false));
  useDatafetch(query, setResults, [itemIndex, setItemIndex]);

  const searchData = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (results.length > 0 && e.key === "Enter") {
      if (document.getElementById(itemIndex)) {
        document.getElementById(itemIndex).click();
      }
      document.getElementById("searchbox").blur();
    }
  };

  const handleKeyDownPress = (e) => {
    if (e.key === "ArrowDown") {
      if (results.length > 0) {
        e.preventDefault();
        setItemIndex((prevIndex) =>
          prevIndex < results.length - 1 ? prevIndex + 1 : 0
        );
      }
    } else if (e.key === "ArrowUp") {
      if (results.length > 0) {
        e.preventDefault();
        setItemIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : results.length - 1
        );
      }
    }
    return;
  };

  const searchResults = results.map((element, index) => {
    const { item } = element;
    return (
      <SearchLink
        key={item.id}
        id={index}
        selected={itemIndex === index ? true : false}
        onClick={() => {
          setQuery("");
          setFocus(false);
        }}
        onMouseOver={() => setItemIndex(index)}
        to={`${item.url}`}
      >
        <li>{`${item.title} (${item.url})`}</li>
        <Hits>{item.title}</Hits>
      </SearchLink>
    );
  });

  return (
    <SearchContainer ref={ref}>
      <SearchBox
        id="searchbox"
        type="Search"
        value={query}
        onChange={searchData}
        onFocus={() => setFocus(true)}
        onKeyUp={handleKeyPress}
        onKeyDown={handleKeyDownPress}
        placeholder="Search..."
        autoComplete="false"
      />
      <StyledSearch />
      <HitsWrapper show={results.length > 0 && focus}>
        {searchResults}
      </HitsWrapper>
    </SearchContainer>
  );
};
export default SearchLayout;
