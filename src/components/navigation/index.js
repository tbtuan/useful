import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';

import NavLink from './NavLink';
import { Paperclip, Code, Cogs, Terminal, Book, Keyboard, Bookmark } from 'emotion-icons/fa-solid';
import Search from '../search/SearchContainer';

import { Github } from 'emotion-icons/fa-brands';

const Nav = styled('nav')`
  flex: 1 1 0%;
  width: 100%;

  li {
    list-style-type: none;
    width: auto;
  }
`;

const StyledPaperclip = styled(Paperclip)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;
`;

const StyledCode = styled(Code)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;
`;

const StyledCogs = styled(Cogs)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;
`;

const StyledTerminal = styled(Terminal)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;
`;

const StyledBook = styled(Book)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;
`;

const StyledKeyboard = styled(Keyboard)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;
`;

const StyledBookmark = styled(Bookmark)`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;
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
