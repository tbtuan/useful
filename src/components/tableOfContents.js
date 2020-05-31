import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';

// import Link from './link';
import config from '../../config';
import { Sidebar, ListItem } from './styles/Sidebar';

const useActiveHash = () => {
  let [prev] = useState(null);

  useEffect(() => {
    const links = document.querySelectorAll("[class^='heading1']");

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

const SidebarLayout = ({ location }) => {
  useActiveHash();
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
                tableOfContents
              }
            }
          }
        }
      `}
      render={({ allMdx }) => {
        let navItems = [];

        let finalNavItems;

        if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
          const navItems = allMdx.edges.map((item, index) => {
            let innerItems;
            if (item !== undefined) {
              if (
                item.node.fields.slug === location.pathname ||
                config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
              ) {
                if (item.node.tableOfContents.items) {
                  innerItems = item.node.tableOfContents.items.map((innerItem, index) => {
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
            if (innerItems) {
              finalNavItems = innerItems;
            }
          });
        }

        if (finalNavItems && finalNavItems.length) {
          return (
            <Sidebar>
              <li className={'rightSideTitle'}>TABLE OF CONTENTS</li>
              {finalNavItems}
            </Sidebar>
          );
        } else {
          return (
            <Sidebar>
              <ul></ul>
            </Sidebar>
          );
        }
      }}
    />
  );
};

export default SidebarLayout;
