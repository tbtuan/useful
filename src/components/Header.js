import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Link from './link';

import config from '../../config.js';
import { DarkModeSwitch } from './DarkModeSwitch';

import Search from './search/SearchContainer';
import Sidebar from './sidebar';

const gitHub = require('./images/github.svg');
import { faIndent, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    color: ${({ theme }) => theme.colors.navbarLink};
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
          siteMetadata: { headerTitle },
        },
      } = data;

      return (
        <Navbar>
          <div className={'navBarHeader'}>
            <Title href="/">{headerTitle}</Title>
          </div>
          <SearchBox />
          <div id="navbar" className={'topnav'}>
            <ul className={'navBarUL navBarNav navBarULRight'}>
              <RightNavLink href="https://github.com/tbtuan/useful" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
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
