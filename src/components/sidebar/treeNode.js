import React from 'react';
import config from '../../../config';
import Link from '../link';
import styled from '@emotion/styled';

const ActiveLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.link};
  color: #fff !important;
`;

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
    padding-left: 3rem;
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

const TreeNode = ({ url, title, items, ...rest }) => {
  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location &&
    (location.pathname === url ||
      location.pathname === url + '/' ||
      location.pathname === config.gatsby.pathPrefix + url);

  return (
    <StyledLi>
      {active
        ? title && <ActiveLink to={url}>{title}</ActiveLink>
        : title && <Link to={url}>{title}</Link>}
      {hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode key={item.url + index.toString()} {...item} />
          ))}
        </ul>
      ) : null}
    </StyledLi>
  );
};

export default TreeNode;
