import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Search } from 'emotion-icons/fa-solid';
import Fuse from 'fuse.js';
import Link from '../link';
import config from '../../../config';

const StyledSearch = styled(Search)`
  position: relative;
  bottom: 1.7rem;
  left: 0.5rem;
  width: 16px;
  height: 16px;
`;

const SearchBox = styled('input')`
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

const SearchContainer = styled('div')`
  margin-top: 6px;
`;

const SearchResult = styled('div')`
  position: relative;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 4px;
  overflow: auto;
  padding: 0 8px 8px;
  display: none;
`;

const SearchLayout = () => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  /**
   * React lifecycle method to fetch the data
   */
  useEffect(() => {
    if (window.__FUSE__) {
      const fuse = new Fuse(window.__FUSE__, {
        findAllMatches: true,
        keys: ['id', 'title', 'url', 'rawBody'],
      });
      const results = fuse.search(searchQuery).slice(0, 5);
      setResults(results);
    }
  }, [searchQuery]);

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  const searchData = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <SearchContainer>
          <span>
            <SearchBox
              type="Search"
              value={searchQuery}
              onChange={searchData}
              placeholder="Search..."
              autocomplete="off"
            />
            <StyledSearch />
          </span>
          <SearchResult>
            {results.map(({ item }) => {
              return (
                <div key={item.id}>
                  <p>{item.title}</p>
                  <Link to={`${item.url}`}>{item.title}</Link>
                </div>
              );
            })}
          </SearchResult>
        </SearchContainer>
      </div>
    </div>
  );
};
export default SearchLayout;
