import React, { Component, useState } from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import { Layout, Link } from '../components';
import config from '../../config';

import styled from '@emotion/styled';

const StyledHeading = styled('h1')`
  font-size: 32px;
  line-height: 1.5;
  font-weight: 500;
  border-left: 2px solid ${({ theme }) => theme.colors.link};
  //border-left: 2px solid #1ed3c6;
  padding: 0 16px;
  flex: 1;
  margin-top: 0;
  padding-top: 0;
  color: ${props => props.theme.colors.heading};
`;

const StyledMainWrapper = styled.div`
  //max-width: 1024px;
  color: ${props => props.theme.colors.text};

  ul,
  ol {
    -webkit-padding-start: 40px;
    -moz-padding-start: 40px;
    -o-padding-start: 40px;
    margin: 24px 0px;
    padding: 0px 0px 0px 2em;

    li {
      font-size: 16px;
      line-height: 1.8;
      font-weight: 400;
    }
  }

  a {
    transition: color 0.15s;
    color: ${props => props.theme.colors.link};
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${props => props.theme.colors.background};
  }

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;

const TitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(230, 236, 241);
  margin-bottom: 32px;

  @media (max-width: 767px) {
    padding: 0 15px;
    display: block;
  }
`;

const Padding = styled('div')`
  padding: 50px 0;
`;

const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 20rem));
  grid-gap: 1rem;
`;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;

const forcedNavOrder = config.sidebar.forcedNavOrder;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;

    if (!data) {
      return null;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title },
      },
    } = data;

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter(slug => slug !== '/')
      // Root dir only
      .filter(slug => slug.split('/').length < 3)
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find(url => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          let prefix = cur.split('/')[1];

          if (config.gatsby && config.gatsby.trailingSlash) {
            prefix = prefix + '/';
          }

          if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map(slug => {
        if (slug) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;

    const metaDescription = mdx.frontmatter.metaDescription;

    const type = mdx.frontmatter.type;

    let canonicalUrl = config.gatsby.siteUrl;

    canonicalUrl =
      config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    if (type && type === 'collection') {
      let finalNavItems;
      let currentLayer = 0;
      const TreeNode = styled(({ url, title, layer, items, ...rest }) => {
        const hasChildren = items.length !== 0;
        if (!layer) {
          layer = 0;
        }
        console.log(layer);
        if (layer == 0) {
          return (
            <Container>
              {items.map((item, index) => (
                <TreeNode key={item.url + index.toString()} layer={layer + 1} {...item} />
              ))}
            </Container>
          );
        } else if (layer == 1) {
          return (
            <div>
              {title && <Link to={url}>{title}</Link>}
              <Divider />
              {hasChildren ? (
                <div>
                  {items.map((item, index) => (
                    <TreeNode key={item.url + index.toString()} layer={layer + 1} {...item} />
                  ))}
                </div>
              ) : null}
            </div>
          );
        } else {
          return (
            <div>
              <Link to={url}>{title}</Link>
              <br />
            </div>
          );
        }
      })``;

      const calculateTreeData = (edges, subpath) => {
        const originalData = edges.filter(
          ({
            node: {
              fields: { slug },
            },
          }) => slug !== subpath && slug.startsWith(subpath)
        );

        const tree = originalData.reduce(
          (
            accu,
            {
              node: {
                fields: { slug, title },
              },
            }
          ) => {
            const parts = slug.split('/');

            let { items: prevItems } = accu;

            const slicedParts =
              config.gatsby && config.gatsby.trailingSlash
                ? parts.slice(1, -2)
                : parts.slice(1, -1);

            for (const part of slicedParts) {
              let tmp = prevItems && prevItems.find(({ label }) => label == part);

              if (tmp) {
                if (!tmp.items) {
                  tmp.items = [];
                }
              } else {
                tmp = { label: part, items: [] };
                prevItems.push(tmp);
              }
              prevItems = tmp.items;
            }
            const slicedLength =
              config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

            const existingItem = prevItems.find(({ label }) => label === parts[slicedLength]);

            if (existingItem) {
              existingItem.url = slug;
              existingItem.title = title;
            } else {
              prevItems.push({
                label: parts[slicedLength],
                url: slug,
                items: [],
                title,
              });
            }
            return accu;
          },
          { items: [] }
        );

        const tmp = [...forcedNavOrder];
        tmp.reverse();
        const tmp2 = tmp.reduce((accu, slug) => {
          const parts = slug.split('/');

          let { items: prevItems } = accu;

          const slicedParts =
            config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

          for (const part of slicedParts) {
            let tmp = prevItems.find(item => item && item.label == part);

            if (tmp) {
              if (!tmp.items) {
                tmp.items = [];
              }
            } else {
              tmp = { label: part, items: [] };
              prevItems.push(tmp);
            }
            if (tmp && tmp.items) {
              prevItems = tmp.items;
            }
          }
          // sort items alphabetically.
          prevItems.map(item => {
            item.items = item.items.sort(function(a, b) {
              if (a.label < b.label) return -1;
              if (a.label > b.label) return 1;
              return 0;
            });
          });
          const slicedLength =
            config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

          const index = prevItems.findIndex(({ label }) => label === parts[slicedLength]);

          if (prevItems.length) {
            accu.items.unshift(prevItems.splice(index, 1)[0]);
          }
          return accu;
        }, tree);
        return tmp2.items[0];
      };

      const Tree = ({ edges, subpath }) => {
        let [treeData] = useState(() => {
          return calculateTreeData(edges, subpath);
        });
        return <TreeNode {...treeData} />;
      };
      //item.node.fields.slug.startsWith(location.pathname)

      return (
        <Layout {...this.props}>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          <link rel="canonical" href={canonicalUrl} />
          <TitleWrapper>
            <StyledHeading>{mdx.fields.title}</StyledHeading>
          </TitleWrapper>
          <StyledMainWrapper>
            <MDXRenderer>{mdx.body}</MDXRenderer>
            {typeof window === 'undefined' ? null : (
              <Tree edges={allMdx.edges} subpath={location.pathname} />
            )}
          </StyledMainWrapper>
          <Padding />
        </Layout>
      );
    } else {
      return (
        <Layout {...this.props}>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          <link rel="canonical" href={canonicalUrl} />
          <TitleWrapper>
            <StyledHeading>{mdx.fields.title}</StyledHeading>
          </TitleWrapper>
          <StyledMainWrapper>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </StyledMainWrapper>
          <Padding />
        </Layout>
      );
    }
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        type
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
          tableOfContents
        }
      }
    }
  }
`;
