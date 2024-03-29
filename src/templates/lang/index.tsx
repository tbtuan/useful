import { graphql } from "gatsby";
import React, { useContext } from "react";
import { calculateTreeData } from "utils/nestedTree";

import { SiteContext } from "providers/siteContext";

import { StyledHeading, TitleWrapper, Padding } from "../style";
import { StyledLink, Li, Container, Main } from "./style";
import Seo from "components/seo";
import Card from "components/card";

import { uniqWith, concat } from "lodash";

interface Props {
  data: Data;
  children: string;
}

const Collection = ({
  data: {
    mdx: {
      frontmatter: { title, description },
    },
    allMdx: { edges },
  },
  children
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
            )
              .filter((tag) => tag !== null)
              .filter((tag) => !siteContext.filter?.includes(tag))
          ).sort();

          if (tags.length == 0) {
            return null;
          }
          return (
            <Card
              key={item.url + index.toString()}
              title={item.title}
              tags={tags}
            >
              {item.tags.some((element) => tags.includes(element)) ? (
                <Li key={item.url + index.toString() + "Index"}>
                  <StyledLink to={item.url}>Index</StyledLink>
                </Li>
              ) : null}
              {item.items.map((innerItem, index) =>
                innerItem.tags.some((element) => tags.includes(element)) ? (
                  <Li key={innerItem.url + index.toString()}>
                    <StyledLink to={innerItem.url}>
                      {innerItem.title}
                    </StyledLink>
                  </Li>
                ) : null
              )}
            </Card>
          );
        })}
      </Container>
    );
  };

  const treeData = calculateTreeData(edges);

  return (
    <>
      <Seo metaTitle={title == "/useful" ? title : title + " | /useful"} metaDescription={description} />
      <TitleWrapper>
        <StyledHeading>{title}</StyledHeading>
      </TitleWrapper>
      <Main>
        {children}
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
    allMdx(filter: { fields: {slug: { regex: "/lang//" } }}, sort: {fields: {slug: ASC}}) {
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
