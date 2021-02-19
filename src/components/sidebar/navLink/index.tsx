import React from "react";
import {
  ActiveLink,
  NormalLink,
  IconWrapper,
  ListItem,
  TextWrapper,
} from "./style";

interface Props {
  text: string;
  path: string;
  children: React.ReactNode;
  location: Location;
}

const NavlinkLayout = ({ text, path, children, location }: Props) => {
  const isActive = (path: string) =>
    location?.pathname === path || location?.pathname === path + "/";

  return (
    <ListItem>
      {isActive(path) ? (
        <ActiveLink aria-label={text} to={path}>
          <TextWrapper>{text}</TextWrapper>
          <IconWrapper>{children}</IconWrapper>
        </ActiveLink>
      ) : (
        <NormalLink aria-label={text} to={path}>
          <TextWrapper>{text}</TextWrapper>
          <IconWrapper>{children}</IconWrapper>
        </NormalLink>
      )}
    </ListItem>
  );
};

export default NavlinkLayout;
