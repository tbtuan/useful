import React from "react";
import { graphql } from "gatsby";

import Helmet from "react-helmet";

import Cheatsheet from "../templates/cheatsheet";
import Collection from "../templates/collection";
import Docs from "../templates/docs";

import Layout from "./layout";

import styled from "@emotion/styled";

const Padding = styled("div")`
  padding: 50px 0;
`;

const Index = (props) => {
  const { data, location } = props;

  if (!data) {
    return null;
  }
  const { mdx } = data;

  // meta tags
  const metaTitle = mdx.frontmatter.metaTitle;

  const metaDescription = mdx.frontmatter.metaDescription;

  const type = mdx.frontmatter.type;

  const MarkdownFormat = ({ data, type }) => {
    switch (type) {
      case "collection":
        return <Collection data={data} location={location} />;
      case "cheatsheet":
        return <Cheatsheet data={data} location={location} />;
      default:
        return <Docs data={data} location={location} />;
    }
  };

  return (
    <Layout {...props}>
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
      <MarkdownFormat data={data} type={type} />
      <Padding />
    </Layout>
  );
};

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
          modifiedTime
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

export default Index;
