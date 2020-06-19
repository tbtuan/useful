import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { DarkModeSwitch } from './DarkModeSwitch';
import { Github } from 'emotion-icons/fa-brands';

const Footer = styled('footer')`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
`;

const StyledGithub = styled(Github)`
  width: 25px;
  fill: ${({ theme }) => theme.colors.link};
`;

const StyledLink = styled('a')`
  width: 10rem;
  height: 21px;
  //background-color: ${({ theme }) => theme.colors.navbarLink};

  svg {
    min-width: 21px;
    min-height: 21px;
    max-width: 21px;
    max-height: 21px;
    color: ${({ theme }) => theme.colors.navbarLink};
    margin-right: 0.5rem;
  }
`;

const FooterLayout = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
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
        <Footer>
          <StyledLink href="https://github.com/tbtuan/useful" target="_blank">
            <StyledGithub />
            Github
          </StyledLink>
          <DarkModeSwitch
            isDarkThemeActive={isDarkThemeActive}
            toggleActiveTheme={toggleActiveTheme}
          />
        </Footer>
      );
    }}
  />
);

export default FooterLayout;
