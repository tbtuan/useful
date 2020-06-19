import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Navigation from './navigation';

import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Sidebar = styled('aside')`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 18rem;

  background-color: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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

const Divider = styled('hr')`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border: 0;
  border-bottom: 1px solid #ede7f3;
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
          <Header />
          <Navigation location={location} />
          <Footer isDarkThemeActive={isDarkThemeActive} toggleActiveTheme={toggleActiveTheme} />
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
