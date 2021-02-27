import React from "react";
import { NavLink, IconWrapper, ListItem, TextWrapper } from "./style";

interface Props {
  text: string;
  path: string;
  children: React.ReactNode;
}

const NavlinkLayout = ({ text, path, children }: Props) => {
  return (
    <ListItem>
      <NavLink
        aria-label={text}
        to={path}
        activeClassName="active"
        partiallyActive={true}
      >
        <TextWrapper>{text}</TextWrapper>
        <IconWrapper>{children}</IconWrapper>
      </NavLink>
    </ListItem>
  );
};

export default NavlinkLayout;
