import { graphql } from "gatsby";
import React from "react";
import Seo from "components/seo";

import Layout from "layout";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import ModifiedAt from "components/modifiedAt";

import { TitleWrapper } from "./style";

import { StyledHeading, ContentWrapper, StyledMainWrapper } from "../style";

const Index = (props) => {
  const { data } = props;

  if (typeof location === "undefined") return null;
  const {
    site: { siteMetadata },
    mdx: {
      frontmatter: { metaTitle, metaDescription },
      fields: { title },
      parent: { relativePath },
      body,
    },
    allMdx: { edges },
  } = data;

  const dateTitleSlug = edges.map((item) => {
    const tmp = {};
    tmp["title"] = item.node.frontmatter.title;
    tmp["date"] = item.node.frontmatter.date;
    tmp["slug"] = item.node.fields.slug;
    return tmp;
  });
  return (
    <>
      <Seo metaTitle={metaTitle} metaDescription={metaDescription} />
      <Layout
        location={location}
        relativePath={relativePath}
        siteMetadata={siteMetadata}
      >
        <TitleWrapper>
          <StyledHeading>{title}</StyledHeading>
          <MDXRenderer>{body}</MDXRenderer>
        </TitleWrapper>
        <ContentWrapper>
          <ModifiedAt dateTitleSlug={dateTitleSlug} />
          <StyledMainWrapper></StyledMainWrapper>
        </ContentWrapper>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        docsLocation
        githubUrl
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
      }
    }
    allMdx(
      filter: { frontmatter: { date: { gt: "0" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Index;
