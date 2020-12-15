import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import { useClickOutside } from "hooks/useClickOutside"
import { useFocus } from "hooks/useFocus"
import { StyledSearch, SearchBox, SearchContainer, HitsWrapper, Hits, SearchLink, SearchTitle } from "./style.js"

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
    const firstMatch = matches[0];

    let url = item.url;
    if (firstMatch.key === "toc.title" && url !== "/") {
      url += "/" + element.item.toc[firstMatch.refIndex].url;
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
