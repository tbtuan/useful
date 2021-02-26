import { graphql } from "gatsby";
import React from "react";
import Seo from "components/seo";

import { MDXRenderer } from "gatsby-plugin-mdx";
import ModifiedAt from "components/modifiedAt";
import Featured from "components/featured";
import { getItemFromStorage } from "utils/localStorage";

import {
  TitleWrapper,
  Main,
  CogIcon,
  StyledIconLink,
  StyledLink,
  StyledA,
  Li,
} from "./style";

import { StyledHeading, ContentWrapper } from "../style";

interface Props {
  data: Data;
}

const Index = ({
  data: {
    mdx: {
      frontmatter: { title, description },
      body,
    },
    allMdx: { edges },
  },
}: Props) => {
  if (typeof location === "undefined") return null;

  const dateTitleSlug = edges.map((item) => {
    const tmp = {};

    tmp["title"] = item.node.frontmatter.title;
    tmp["date"] = item.node.frontmatter.date;
    tmp["slug"] = item.node.fields.slug;
    return tmp;
  });

  const visistedArr = getItemFromStorage("visited");

  const pageVisistedArr = getItemFromStorage("page_visited");

  return (
    <>
      <Seo metaTitle={title} metaDescription={description} />
      <TitleWrapper>
        <StyledHeading>{title}</StyledHeading>
        <StyledIconLink to="/settings">
          <CogIcon />
        </StyledIconLink>
        <MDXRenderer>{body}</MDXRenderer>
      </TitleWrapper>
      <ContentWrapper>
        <ModifiedAt dateTitleSlug={dateTitleSlug} />
        <Main>
          <Featured title="Visited links">
            {visistedArr &&
              visistedArr.map((item, index) => (
                <Li key={item.url + index.toString()}>
                  <StyledA
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </StyledA>
                </Li>
              ))}
          </Featured>
          <Featured title="Visited pages">
            {pageVisistedArr &&
              pageVisistedArr.map((item, index) => (
                <Li key={item.url + index.toString()}>
                  <StyledLink to={item.url}>{item.text}</StyledLink>
                </Li>
              ))}
          </Featured>
        </Main>
      </ContentWrapper>
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
        title
        description
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
