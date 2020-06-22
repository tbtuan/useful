import React, { useState, useEffect } from 'react';

import Link from './link';
import config from '../../config';

import styled from '@emotion/styled';

const SidebarWrapper = styled('div')`
  flex: 0 0 14rem;
  order: 2;
  margin-left: auto;
  margin-top: -4rem;
  background-color: ${props => props.theme.colors.background};
`;

const Sidebar = styled('nav')`
  position: sticky;
  top: calc(2rem + 2.5rem + 3rem);
  max-height: calc(100vh - 4rem - 2.5rem - 3rem - 3rem);
  right: 0;
  overflow: auto;

  li {
    list-style-type: none;
    //border-left: 1px solid #e6ecf1;
    //border-left-color: rgb(230, 236, 241);
  }

  li a {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 24px 7px 16px;

    color: ${props => props.theme.colors.text};
  }
`;

const TOCTitle = styled('li')`
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 7px 24px 7px 16px;
  margin: 0;

  color: ${props => props.theme.colors.text};
`;

const StyledLi = styled('li')`
  list-style: none;
  margin: 0;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.link};
    }

    &.active {
      color: ${({ theme }) => theme.colors.link};
    }

    ${props =>
      props.active &&
      `
    color: #1ED3C6;
    border-color: ${({ theme }) => theme.colors.seperator};
    //border-color: rgb(230,236,241) !important;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    background-color: #fff;
  `} // external link icon
  svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const ListItem = styled(({ active, level, ...props }) => {
  return (
    <StyledLi>
      <a href={props.to} {...props}>
        {props.children}
      </a>
    </StyledLi>
  );
})``;

const useActiveHash = () => {
  let [prev] = useState(null);

  useEffect(() => {
    // [class*='Heading2']
    const links = document.querySelectorAll('main div h2');

    const handleObserver = entries => {
      entries.forEach(entry => {
        let tocLink = document.querySelector(`[href='#${entry.target.getAttribute('id')}']`);

        if (entry.isIntersecting) {
          tocLink.classList.add('active');
          if (prev != null && prev != tocLink) {
            prev.classList.remove('active');
          }
          prev = tocLink;
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '0% 0% -30% 0%',
    });

    links.forEach(item => {
      observer.observe(item);
    });
  });
  //return props.children;
};

const SidebarLayout = ({ location, allMdx }) => {
  useActiveHash();

  let finalNavItems;

  let relativePath;

  if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
    allMdx.edges.map((item, index) => {
      let innerInnerItems;
      if (item !== undefined) {
        if (
          item.node.fields.slug === location.pathname ||
          // trailing slash
          item.node.fields.slug + '/' === location.pathname ||
          config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
        ) {
          if (item.node.tableOfContents.items) {
            innerInnerItems = item.node.tableOfContents.items.map((innerItem, index) => {
              const itemId = innerItem.title
                ? innerItem.title.replace(/\s+/g, '').toLowerCase()
                : '#';

              return (
                <ListItem key={index} to={`#${itemId}`} level={1}>
                  {innerItem.title}
                </ListItem>
              );
            });
          }
        }
      }
      if (innerInnerItems) {
        relativePath = item.node.parent.relativePath;
        finalNavItems = innerInnerItems;
      }
    });
  }
  if (finalNavItems && finalNavItems.length) {
    return (
      <SidebarWrapper>
        <Sidebar>
          <TOCTitle>On this page</TOCTitle>
          {finalNavItems}
        </Sidebar>
      </SidebarWrapper>
    );
  } else {
    return (
      <Sidebar>
        <ul></ul>
      </Sidebar>
    );
  }
};

export default SidebarLayout;
