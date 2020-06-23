import React from "react";
import styled from "@emotion/styled";
import config from "../../../config";
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
    line-height: 1.5;
    height: 3.5rem;
    padding-right: 4rem;
    padding-left: 4rem;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;

    svg {
      margin-left: auto;
      vertical-align: middle; 
      display: inline-block;
   } 
  }

  a:hover {
    //background: ${({ theme }) => theme.colors.nav};
    background-color: ${({ theme }) => theme.colors.link};
    //background-color: #1ed3c6;
    color: #fff !important;

    /* background: #F8F8F8 */
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
`;

const NavlinkLayout = ({ text, link, children, location }) => {
  const isActive = (link) =>
    location &&
    (location.pathname === link ||
      location.pathname === link + "/" ||
      location.pathname === config.gatsby.pathPrefix + link ||
      location.pathname === config.gatsby.pathPrefix + link + "/");

  return (
    <StyledLi>
      {isActive(link) ? (
        <ActiveLink to={link}>
          {text}
          <IconWrapper>{children}</IconWrapper>
        </ActiveLink>
      ) : (
        <Link to={link}>
          {text}
          <IconWrapper>{children}</IconWrapper>
        </Link>
      )}
    </StyledLi>
  );
};

export default NavlinkLayout;
