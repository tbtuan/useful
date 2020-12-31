import { graphql } from "gatsby";
import React, { useMemo } from "react";
import Helmet from "react-helmet";

import Cheatsheet from "templates/cheatsheet";
import Collection from "templates/collection";
import Docs from "templates/docs";

import Layout from "templates/layout";
import { Padding } from "./style";

const Index = (props) =>
  useMemo(() => {
    const { data, location } = props;
    if (!data) return null;
    const { mdx } = data;

    // meta tags
    if (!mdx) return props.children;
    const { metaTitle, metaDescription, type } = mdx.frontmatter;

    const MarkdownFormat = ({ data, type }) => {
      switch (type) {
        case "collection":
          return <Collection data={data} location={location} />;
        case "cheatsheet":
          return <Cheatsheet mdx={mdx} />;
        default:
          return <Docs mdx={mdx} />;
      }
    };

    return (
      <>
        <Helmet defer={false} title={metaTitle}>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta name="description" content={metaDescription} />
          ) : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="og:description" content={metaDescription} />
          ) : null}
        </Helmet>
        <Layout {...props}>
          <MarkdownFormat data={data} type={type} />
          <Padding />
        </Layout>
      </>
    );
  }, [props]);

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
        date
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
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
`;

//export default Index;
export default Index;
