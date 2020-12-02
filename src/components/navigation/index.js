import React from "react";
import styled from "@emotion/styled";

import NavLink from "./navLink";
import {
  Code,
  Cogs,
  Terminal,
  Keyboard,
  ExternalLinkAlt,
} from "../icons";

const Nav = styled("nav")`
  width: 100%;
  padding-top: 3rem;
  text-align: justify;

  li {
    list-style-type: none;
    width: auto;
    margin: 0;
  }
`;

const Ul = styled("ul")`
  margin-left: 0;
`;

const Icon = styled(({ tag, children, ...props }) =>
  React.createElement(tag, props, children)
)`
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
      <Ul>
        <NavLink text="Commands" link="/command" location={location}>
          <Icon tag={Terminal} />
        </NavLink>
        <NavLink text="Languages" link="/lang" location={location}>
          <Icon tag={Code} />
        </NavLink>
        <NavLink text="Links" link="/links" location={location}>
          <Icon tag={ExternalLinkAlt} />
        </NavLink>
        <NavLink text="Setups" link="/setups" location={location}>
          <Icon tag={Cogs} />
        </NavLink>
        <NavLink text="Shortcuts" link="/shortcuts" location={location}>
          <Icon tag={Keyboard} />
        </NavLink>
      </Ul>
    </Nav>
  );
};

export default NavigationLayout;
