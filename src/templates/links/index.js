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

  const CardContainer = ({ edges }) => {
    return (
      <Container key="asdf">
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
          <CardContainer edges={edges} />
        </Main>
        <Padding />
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
    allMdx(filter: { slug: { regex: "/links//" } }) {
      edges {
        node {
          frontmatter {
            description
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
