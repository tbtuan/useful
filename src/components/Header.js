import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';

import { DarkModeSwitch } from './DarkModeSwitch';

import Search from './search/SearchContainer';

import { Github } from 'emotion-icons/fa-brands';

const Title = styled('a')`
  color: ${({ theme }) => theme.colors.text};
`;

const Navbar = styled('nav')`
  background-color: #001934;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0;
  border-top: 0;
  margin-bottom: 0;
  border: 0;
  display: flex;
  //justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 15px;
  position: fixed; // Changed
  width: 100%; // Changed
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.seperator};

  @media (max-width: 767px) {
    display: block;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 10px;
  }
`;

const SearchBox = styled('input')`
  flex-grow: 1;
  margin-left: 2rem;
  margin-right: 4rem;
  line-height: 1.8rem;
  font-size: 1rem;
  border-style: solid;
  background-color: ${({ theme }) => theme.colors.textbox};
  border-color: ${({ theme }) => theme.colors.textbox};
  border-radius: 0.5rem;
`;

const RightNavLink = styled('a')`
  height: 21px;

  svg {
    min-width: 21px;
    min-height: 21px;
    max-width: 21px;
    max-height: 21px;
    color: ${({ theme }) => theme.colors.navbarLink};
    margin-right: 0.5rem;
  }
`;

const NavbarHeader = styled('div')`
  min-width: 18rem;
  padding-left: 2.5rem;
  padding-right: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    min-width: auto;
    padding-right: 0;
    align-items: center;
    align-self: flex-start;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .navBarHeader {
      min-width: 240px;
      flex: initial;
    }
    .divider {
      margin: 0 5px;
      height: 20px;
    }
    .navBarUL li a {
      padding: 10px 5px;
    }
  }
`;

const NavbarTab = styled('div')`
  background-color: #001934;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0;
  border-top: 0;
  margin-bottom: 0;
  border: 0;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  border-left: 1px solid ${({ theme }) => theme.colors.seperator};
  border-right: 1px solid ${({ theme }) => theme.colors.seperator};

  min-width: 18rem;
  padding-left: 2.5rem;
  padding-right: 20px;
  display: flex;
  align-items: center;
`;

const NavbarRight = styled('div')`
  margin-left: auto;
  padding-right: 5rem;
  -webkit-transition: top 0.5s, bottom 0.5s;
  -webkit-overflow-scrolling: touch;
  display: flex;
  justify-content: space-between;
  //align-items: center;

  @media (max-width: 767px) {
    position: static;
    align-self: flex-end;
    display: flex;
    align-items: center;
    margin: 7.5px 0px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
  }
`;

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              headerTitle
              headerLinks {
                link
                text
              }
            }
          }
          mdx {
            fields {
              id
              title
              slug
            }
            frontmatter {
              title
              metaTitle
              metaDescription
            }
          }
        }
      `}
      render={data => {
        const {
          mdx,
          site: {
            siteMetadata: { headerTitle, title },
          },
        } = data;

        return (
          <Navbar>
            <NavbarHeader>
              <Title href="/">{headerTitle}</Title>
            </NavbarHeader>
            <NavbarTab>{location.pathname}</NavbarTab>
            <SearchBox />
            <NavbarRight>
              <RightNavLink href="https://github.com/tbtuan/useful" target="_blank">
                <Github />
              </RightNavLink>
              <DarkModeSwitch
                isDarkThemeActive={isDarkThemeActive}
                toggleActiveTheme={toggleActiveTheme}
              />
            </NavbarRight>
          </Navbar>
        );
      }}
    />
  );
};

export default Header;
