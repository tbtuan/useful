import React from 'react';
import styled from '@emotion/styled';
import config from '../../config';
import Link from './link';

const StyledLi = styled('li')`
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
    padding: 7px 24px 7px 16px;
    padding-right: 35px;
    padding-left: 2.5rem;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;
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

const NavlinkLayout = ({ text, link, children, location }) => {
  const isActive = link =>
    location &&
    (location.pathname === link ||
      location.pathname === link + '/' ||
      location.pathname === config.gatsby.pathPrefix + link);

  return (
    <StyledLi>
      {isActive(link) ? (
        <ActiveLink to={link}>
          {children}
          {text}
        </ActiveLink>
      ) : (
        <Link to={link}>
          {children}
          {text}
        </Link>
      )}
    </StyledLi>
  );
};

export default NavlinkLayout;
