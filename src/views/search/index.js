import React, { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import { StyledSearch, SearchBox, SearchContainer, HitsWrapper, Hits, SearchLink, SearchTitle } from "./style.js"

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
