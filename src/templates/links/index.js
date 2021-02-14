import { graphql } from "gatsby";
import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { calculateTreeData2 } from "utils/nestedTree";

import { StyledHeading, TitleWrapper, Padding } from "../style";
import { StyledLink, Li, Container, Main } from "./style";
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

  const CardContainer = ({ items }) => {
    return (
      <Container>
        {items.map((item, index) => (
          <Section key={item.url + index.toString()} title={item.title}>
            <Li key={item.url + index.toString()}>
              <StyledLink to={item.url}>{item.title}</StyledLink>
            </Li>
          </Section>
        ))}
      </Container>
    );
  };

  const treeData = calculateTreeData2(edges, location.pathname);
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
          <CardContainer {...treeData} />
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
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;

export default Links;
