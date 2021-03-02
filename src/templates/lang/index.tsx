import { graphql } from "gatsby";
import React, { useContext } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { calculateTreeData } from "utils/nestedTree";

import { SiteContext } from "providers/siteContext";

import { StyledHeading, TitleWrapper, Padding } from "../style";
import { StyledLink, Li, Container, Main } from "./style";
import Seo from "components/seo";
import Card from "components/card";

import { uniqWith, concat } from "lodash";

interface Props {
  data: Data;
}

const Collection = ({
  data: {
    mdx: {
      frontmatter: { title, description },
      body,
    },
    allMdx: { edges },
  },
}: Props) => {
  if (typeof location === "undefined") return null;
  const CardContainer = ({ items }) => {
    const siteContext = useContext(SiteContext);

    return (
      <Container>
        {items.map((item, index) => {
          const tags = uniqWith(
            concat(
              item.items.flatMap((item) => item.tags),
              item.tags
            ).filter((tag) => tag !== null)
          );

          const filtered =
            tags?.filter((tag) => siteContext.filter?.includes(tag)).length >
              0 && tags.length > 0;

          if (filtered) {
            return null;
          }
          return (
            <Card
              key={item.url + index.toString()}
              title={item.title}
              tags={tags}
            >
              <Li key={item.url + index.toString() + "Index"}>
                <StyledLink to={item.url}>Index</StyledLink>
              </Li>
              {item.items.map((innerItem, index) => (
                <Li key={innerItem.url + index.toString()}>
                  <StyledLink to={innerItem.url}>{innerItem.title}</StyledLink>
                </Li>
              ))}
            </Card>
          );
        })}
      </Container>
    );
  };

  const treeData = calculateTreeData(edges);

  return (
    <>
      <Seo metaTitle={title} metaDescription={description} />
      <TitleWrapper>
        <StyledHeading>{title}</StyledHeading>
      </TitleWrapper>
      <Main>
        <MDXRenderer>{body}</MDXRenderer>
        <CardContainer {...treeData} />
      </Main>
      <Padding />
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
    allMdx(filter: { slug: { regex: "/lang//" } }) {
      edges {
        node {
          frontmatter {
            tags
          }
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
