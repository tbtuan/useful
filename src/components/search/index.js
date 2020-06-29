import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import Search from "emotion-icons/fa-solid/Search";
import Fuse from "fuse.js";
import Link from "../link";

const StyledSearch = styled(Search)`
  position: relative;
  left: 0.25rem;
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
  margin-left: -1rem;

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
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 4rem;
  flex: 0 0 20em;

  display: flex;
  justify-content: center;
  align-items: center;
  place-content: flex-start;

  @media only screen and (max-width: 576px) {
    flex: none;
    padding-left: 2rem;
    width: 40%;
  }
`;

const HitsWrapper = styled("div")`
  display: ${(props) => (props.show ? `grid` : `none`)};
  position: absolute;
  z-index: 2;
  top: calc(100% + 0.5em);
  width: 40vw;
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.searchShadow});
  padding: 1rem;
  background: white;

  border-radius: 4px;
  * {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Hits = styled("li")``;

const SearchLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  list-style: none;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0;

  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.searchHover : `transparent`};
`;

const SearchTitle = styled("span")`
  font-weight: 700;
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
        includeMatches: true,
        includeScore: true,
        threshold: 0.3,
        keys: ["id", "title", "url", "toc.title"],
      });

      const results = fuse.search(query, { limit: 5 });

      setResults(results);
      // To keep the selection inside the bounds while typing
      if (results && itemIndex > results.length - 1) {
        setItemIndex(0);
      }
    }
  }, [query]);
}

const SearchLayout = () => {
  if (typeof window === "undefined") {
    return null;
  }

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
    const { item, matches } = element;
    let url = item.url;
    if (matches[0].key === "toc.title" && url !== "/") {
      url += "/" + element.item.toc[matches[0].refIndex].url;
    }

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
        to={`${url}`}
      >
        <li>
          <SearchTitle>{item.title}</SearchTitle>
          <span> ({url})</span>
        </li>
        <Hits>{item.title}</Hits>
      </SearchLink>
    );
  });

  return (
    <SearchContainer ref={ref}>
      <StyledSearch />
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
      <HitsWrapper show={results.length > 0 && focus}>
        {searchResults}
      </HitsWrapper>
    </SearchContainer>
  );
};

export default SearchLayout;
