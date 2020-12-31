import Link from "components/link";
import { ActiveLink, IconWrapper, ListItem, TextWrapper } from "./style";

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
        <Link to={link}>
          <TextWrapper>{text}</TextWrapper>
          <IconWrapper>{children}</IconWrapper>
        </Link>
      )}
    </ListItem>
  );
};

export default NavlinkLayout;
