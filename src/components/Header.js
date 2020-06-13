import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Link from './link';

import config from '../../config.js';
import { DarkModeSwitch } from './DarkModeSwitch';

import Search from './search/SearchContainer';
import Sidebar from './sidebar';

const gitHub = require('./images/github.svg');

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

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
    fill: ${({ theme }) => theme.colors.navbarLink};
    margin-right: 0.5rem;
  }
`;

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 767px) {
    display: block;
  }
`;

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={data => {
      const {
        site: {
          siteMetadata: { headerTitle, githubUrl, headerLinks },
        },
      } = data;

      return (
        // <div className={'navBarDefault'}></div>
        <Navbar>
          <div className={'navBarHeader'}>
            <Title href="/">{headerTitle}</Title>
          </div>
          <SearchBox />
          <div id="navbar" className={'topnav'}>
            <ul className={'navBarUL navBarNav navBarULRight'}>
              <RightNavLink
                className="sidebarLink"
                href="https://github.com/tbtuan/useful"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
                </svg>
              </RightNavLink>
              <DarkModeSwitch
                isDarkThemeActive={isDarkThemeActive}
                toggleActiveTheme={toggleActiveTheme}
              />
            </ul>
          </div>
          <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
            <div className={'navBarDefault removePadd'}>
              <span
                onClick={myFunction}
                className={'navBarToggle'}
                onKeyDown={myFunction}
                role="button"
                tabIndex={0}
              >
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
          </StyledBgDiv>
        </Navbar>
      );
    }}
  />
);

export default Header;
