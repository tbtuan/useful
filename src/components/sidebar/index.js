import React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import config from '../../../config';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { Github } from 'emotion-icons/fa-brands';

const Sidebar = styled('aside')`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 2rem;
  width: 18rem;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  flex-direction: column;

  //-webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);

  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: 100vh;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    height: auto;
  }
`;

const SearchBox = styled('input')`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  line-height: 1.8rem;
  font-size: 1rem;
  border-style: solid;
  background-color: ${({ theme }) => theme.colors.textbox};
  border-color: ${({ theme }) => theme.colors.textbox};
  border-radius: 0.5rem;
`;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;

const Title = styled('a')`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SidebarUL = styled('ul')`
  margin-top: 2rem;

  li {
    list-style-type: none;
    width: auto;
  }
`;

const StyledGithub = styled(Github)`
  width: 25px;
  fill: ${({ theme }) => theme.colors.link};
`;

const StyledLink = styled('a')`
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

const Additional = styled('div')`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
`;

const SidebarLayout = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
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
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { headerTitle, title },
      },
      allMdx,
    }) => {
      return (
        <Sidebar>
          <Title href="/">{headerTitle}</Title>
          <SearchBox />
          <Divider />
          <SidebarUL>
            <Tree edges={allMdx.edges} />
          </SidebarUL>
          <Additional>
            <StyledLink href="https://github.com/tbtuan/useful" target="_blank">
              <StyledGithub />
            </StyledLink>
            <DarkModeSwitch
              isDarkThemeActive={isDarkThemeActive}
              toggleActiveTheme={toggleActiveTheme}
            />
          </Additional>
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
