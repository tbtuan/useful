import {
  ActiveLink,
  NormalLink,
  IconWrapper,
  ListItem,
  TextWrapper,
} from "./style";

const NavlinkLayout = ({ text, path, children, location }) => {
  const isActive = (path) =>
    location &&
    (location.pathname === path || location.pathname === path + "/");

  return (
    <ListItem>
      {isActive(path) ? (
        <ActiveLink to={path}>
          <TextWrapper>{text}</TextWrapper>
          <IconWrapper>{children}</IconWrapper>
        </ActiveLink>
      ) : (
        <NormalLink to={path}>
          <TextWrapper>{text}</TextWrapper>
          <IconWrapper>{children}</IconWrapper>
        </NormalLink>
      )}
    </ListItem>
  );
};

export default NavlinkLayout;
