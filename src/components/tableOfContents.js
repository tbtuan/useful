import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Link from './link';
import config from '../../config';
import { Sidebar, ListItem } from './styles/Sidebar';
import { Divide } from 'react-feather';

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
          site {
            siteMetadata {
              title
              docsLocation
            }
          }
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
                parent {
                  ... on File {
                    relativePath
                  }
                }
                tableOfContents
              }
            }
          }
        }
      `}
      render={({ allMdx, site }) => {
        const docsLocation = site.siteMetadata.docsLocation;
        let navItems = [];

        let finalNavItems;
        let relativePath;

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
              relativePath = item.node.parent.relativePath;
              console.log(relativePath);
              finalNavItems = innerItems;
            }
          });
        }

        if (finalNavItems && finalNavItems.length) {
          return (
            <div style={{ flex: '0 0 16rem', order: 2, marginLeft: 'auto' }}>
              <Sidebar>
                <div className={'rightSideMod'}>
                  {docsLocation && (
                    <Link className={'rightSideEdit'} to={`${docsLocation}/${relativePath}`}>
                      Edit this page
                    </Link>
                  )}
                </div>
                <li className={'rightSideTitle'}>TABLE OF CONTENTS</li>
                {finalNavItems}
              </Sidebar>
            </div>
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
