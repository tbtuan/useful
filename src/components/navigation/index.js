import React from "react";
import styled from "@emotion/styled";

import NavLink from "./navLink";
import {
  Paperclip,
  Code,
  Cogs,
  Terminal,
  Book,
  Keyboard,
  Bookmark,
} from "emotion-icons/fa-solid";

const Nav = styled("nav")`
  flex: 1 1 0%;
  width: 100%;
  padding-top: 3rem;
  text-align: justify;

  li {
    list-style-type: none;
    width: auto;
    margin: 0;
  }
`;

const StyledPaperclip = styled(Paperclip)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;

  @media only screen and (max-width: 1023px) {
    margin-right: 0;
  }
`;

const StyledCode = styled(Code)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;

  @media only screen and (max-width: 1023px) {
    margin-right: 0;
  }
`;

const StyledCogs = styled(Cogs)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;

  @media only screen and (max-width: 1023px) {
    margin-right: 0;
  }
`;

const StyledTerminal = styled(Terminal)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;

  @media only screen and (max-width: 1023px) {
    margin-right: 0;
  }
`;

const StyledBook = styled(Book)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;

  @media only screen and (max-width: 1023px) {
    margin-right: 0;
  }
`;

const StyledKeyboard = styled(Keyboard)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;

  @media only screen and (max-width: 1023px) {
    margin-right: 0;
  }
`;

const StyledBookmark = styled(Bookmark)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;

  @media only screen and (max-width: 1023px) {
    margin-right: 0;
  }
`;

const NavigationLayout = ({ location }) => {
  return (
    <Nav>
      <NavLink text="Commands" link="/command" location={location}>
        <StyledTerminal />
      </NavLink>
      <NavLink text="Languages" link="/lang" location={location}>
        <StyledCode />
      </NavLink>
      <NavLink text="Learning" link="/learning" location={location}>
        <StyledBook />
      </NavLink>
      <NavLink text="References" link="/references" location={location}>
        <StyledBookmark />
      </NavLink>
      <NavLink text="Setups" link="/setups" location={location}>
        <StyledCogs />
      </NavLink>
      <NavLink text="Shortcuts" link="/shortcuts" location={location}>
        <StyledKeyboard />
      </NavLink>
      <NavLink text="Tools" link="/tools" location={location}>
        <StyledPaperclip />
      </NavLink>
    </Nav>
  );
};

export default NavigationLayout;