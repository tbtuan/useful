import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';

import Link from './link';

import Search from './search/SearchContainer';

const Header = styled('header')`
  padding-top: 1.5rem;
  width: 100%;
`;

const Title = styled(Link)`
  margin-left: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SearchBox = styled('input')`
  margin-left: 2.5rem;
  margin-right: auto;
  line-height: 1.8rem;
  font-size: 1rem;
  border-style: solid;
  background-color: ${({ theme }) => theme.colors.textbox};
  border-color: ${({ theme }) => theme.colors.textbox};
  border-radius: 0.5rem;
`;

const Divider = styled('hr')`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-bottom: 1px solid #ede7f3;
  background: none;
`;

const HeaderLayout = ({ location }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              headerTitle
            }
          }
        }
      `}
      render={data => {
        const {
          site: {
            siteMetadata: { headerTitle },
          },
        } = data;

        return (
          <Header>
            <Title to="/">{headerTitle}</Title>
            <Divider />
            <SearchBox />
            <Divider />
          </Header>
        );
      }}
    />
  );
};

export default HeaderLayout;
