import React from "react";
import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "hooks/useClickOutside";
import { useFocus } from "hooks/useFocus";
import { useSearch } from "hooks/useSearch";
import {
  Overlay,
  StyledSearch,
  SearchBox,
  SearchContainer,
  HitsWrapper,
  SearchLink,
  SearchTitle,
} from "./style";

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
  useSearch(query, setResults, [itemIndex, setItemIndex]);

  const searchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length > 0 && e.key === "Enter") {
      if (document.getElementById(itemIndex.toString())) {
        document.getElementById(itemIndex.toString()).click();
      }
      document.getElementById("searchbox").blur();
    }
  };

  const handleKeyDownPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

    const firstMatch = matches[0];

    let url = item.url;

    if (firstMatch.key === "toc.title" && url !== "/") {
      url += "/" + element.item.toc[firstMatch.refIndex].url;
    }

    return (
      <SearchLink
        key={item.id}
        id={index.toString()}
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
      </SearchLink>
    );
  });

  useEffect(() => {
    if (
      focus &&
      results.length > 0 &&
      window.matchMedia("(max-width: 576px)").matches
    ) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }
  }, [
    focus &&
      results.length > 0 &&
      window.matchMedia("(max-width: 576px)").matches,
  ]);

  return (
    <SearchContainer ref={ref}>
      <StyledSearch show={results.length > 0 && focus ? 1 : 0} />
      <SearchBox
        show={results.length > 0 && focus}
        id="searchbox"
        type="Search"
        aria-label="Search"
        value={query}
        onChange={searchData}
        onFocus={() => setFocus(true)}
        onKeyUp={handleKeyPress}
        onKeyDown={handleKeyDownPress}
        placeholder="Search..."
        autoComplete="off"
      />
      <HitsWrapper show={results.length > 0 && focus}>
        {searchResults}
      </HitsWrapper>
      {results.length > 0 && focus && (
        <Overlay onClick={() => setFocus(false)} />
      )}
    </SearchContainer>
  );
};

export default SearchLayout;
