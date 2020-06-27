import React from "react";
import styled from "@emotion/styled";
import Link from "../link";

const StyledLi = styled("li")`
  list-style: none;
  padding: 0;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    font-weight: 500;
    height: 3.5rem;
    padding-right: 4rem;
    padding-left: 4rem;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;

    @media only screen and (max-width: 1023px) {
      padding: 0;
    }

    svg {
      margin-left: auto;
      vertical-align: middle;
      display: inline-block;
    }
  }

  a:hover {
    background-color: ${({ theme }) => theme.colors.link};
    color: #fff !important;
  }
`;

const ActiveLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.link};
  color: #fff !important;
`;

const IconWrapper = styled("div")`
  display: inline-block;
  vertical-align: "middle";
  margin-left: auto;

  @media only screen and (max-width: 1023px) {
    margin-right: auto;
  }
`;

const TextWrapper = styled("span")`
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const NavlinkLayout = ({ text, link, children, location }) => {
  const isActive = (link) =>
    location &&
    (location.pathname === link || location.pathname === link + "/");

  return (
    <StyledLi>
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
    </StyledLi>
  );
};

export default NavlinkLayout;
