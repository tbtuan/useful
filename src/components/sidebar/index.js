import React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import config from '../../../config';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { Github } from 'emotion-icons/fa-brands';

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #1ed3c6 !important;
    }

    &.active {
      color: #333 !important;
    }

    ${props =>
      props.active &&
      `
      // color: #663399;
      border-color: ${({ theme }) => theme.colors.seperator};
      //border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

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
    /* position: relative; */
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

  li a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    padding: 7px 24px 7px 16px;
    padding-left: 10px;
    padding-right: 25px;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;
  }

  .item {
    list-style: none;
    padding: 0;
  }

  .item > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding-right: 35px;
    padding-left: 3rem;
  }

  .item .item {
    margin-left: 16px;
  }

  .item > a:hover {
    //background: ${({ theme }) => theme.colors.nav};
    background-color: ${({ theme }) => theme.colors.link};
    //background-color: #1ed3c6;
    color: #fff !important;

    /* background: #F8F8F8 */
  }

  .active > a {
    background-color: ${({ theme }) => theme.colors.link};
    color: #fff !important;
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
