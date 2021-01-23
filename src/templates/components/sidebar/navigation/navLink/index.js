import {
  ActiveLink,
  NormalLink,
  IconWrapper,
  ListItem,
  TextWrapper,
} from "./style";

const NavlinkLayout = ({ text, link, children, location }) => {
  const isActive = (link) =>
    location &&
    (location.pathname === link || location.pathname === link + "/");

  return (
    <ListItem>
      {isActive(link) ? (
        <ActiveLink to={link}>
          <TextWrapper>{text}</TextWrapper>
          <IconWrapper>{children}</IconWrapper>
        </ActiveLink>
      ) : (
        <NormalLink to={link}>
          <TextWrapper>{text}</TextWrapper>
          <IconWrapper>{children}</IconWrapper>
        </NormalLink>
      )}
    </ListItem>
  );
};

export default NavlinkLayout;
