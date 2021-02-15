import { graphql } from "gatsby";
import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

import { StyledHeading, TitleWrapper, Padding } from "../style";
import { Container, Main } from "./style";
import Layout from "layout";
import Seo from "components/seo";
import Section from "components/section";

const Links = (props) => {
  const { data } = props;

  if (typeof location === "undefined") return null;

  const {
    site: { siteMetadata },
    mdx: {
      frontmatter: { title, description },
      parent: { relativePath },
      body,
    },
    allMdx: { edges },
  } = data;
  const SectionContainer = ({ edges }) => {
    return (
      <Container>
        {edges.map(({ node }, index) => (
          <Section key={node.fields.id} node={node}></Section>
        ))}
      </Container>
    );
  };

  return (
    <>
      <Seo metaTitle={title} metaDescription={description} />
      <Layout
        location={location}
        relativePath={relativePath}
        siteMetadata={siteMetadata}
      >
        <TitleWrapper>
          <StyledHeading>{title}</StyledHeading>
        </TitleWrapper>
        <Main>
          <MDXRenderer>{body}</MDXRenderer>
          <SectionContainer edges={edges} />
        </Main>
        <Padding />
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query($id: String!, $slugRegex: String!) {
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
      }
      body
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        title
        description
        date
      }
    }
    allMdx(filter: { slug: { regex: $slugRegex } }) {
      edges {
        node {
          frontmatter {
            description
            tags
          }
          fields {
            slug
            title
            id
          }
          tableOfContents
        }
      }
    }
  }
`;

export default Links;
