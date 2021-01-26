import { graphql } from "gatsby";
import React, { useMemo } from "react";

import Collection from "templates/collection";

import Layout from "templates/layout";
import { Padding } from "./style";
import "normalize.css";
import Seo from "components/seo";

const Lang = (props) =>
  useMemo(() => {
    const { data, location } = props;

    if (!data) return null;
    const { mdx } = data;

    // meta tags
    if (!mdx) return props.children;
    const { metaTitle, metaDescription } = mdx.frontmatter;

    return (
      <>
        <Seo metaTitle={metaTitle} metaDescription={metaDescription} />
        <Layout {...props}>
          <Collection data={data} location={location} />
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

export default Lang;
