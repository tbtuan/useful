import { graphql } from "gatsby";
import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { calculateTreeData } from "utils/nestedTree";

import { StyledHeading, TitleWrapper, Padding } from "../style";
import { StyledLink, Li, Container, Main } from "./style";
import Layout from "layout";
import Seo from "components/seo";
import Card from "components/card";
import ModifiedText from "components/modifiedText";

const Collection = (props) => {
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

  const CardContainer = ({ items }) => {
    return (
      <Container>
        {items.map((item, index) => (
          <Card key={item.url + index.toString()} title={item.title}>
            <Li key={item.url + index.toString() + "Index"}>
              <StyledLink to={item.url}>Index</StyledLink>
            </Li>
            {item.items.map((innerItem, index) => (
              <Li key={innerItem.url + index.toString()}>
                <StyledLink to={innerItem.url}>{innerItem.title}</StyledLink>
              </Li>
            ))}
          </Card>
        ))}
      </Container>
    );
  };

  const treeData = calculateTreeData(edges, location.pathname);
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
        }
      }
    }
  }
`;

export default Collection;
