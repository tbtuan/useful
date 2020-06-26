import React from "react";

import Footer from "./footer";
import Navigation from "./navigation";

import styled from "@emotion/styled";

const Sidebar = styled("aside")`
  position: fixed;
  top: 6rem;
  bottom: 0;
  width: 18rem;

  background-color: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);

  @media only screen and (max-width: 1023px) {
    width: 4rem;
  }

  @media only screen and (max-width: 576px) {
    top: 3rem;
  }
`;

const SidebarLayout = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <Sidebar>
    <Navigation location={location} />
    <Footer
      isDarkThemeActive={isDarkThemeActive}
      toggleActiveTheme={toggleActiveTheme}
    />
  </Sidebar>
);

export default SidebarLayout;
