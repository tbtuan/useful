import { graphql } from "gatsby";
import React from "react";
import Seo from "components/seo";

import Layout from "layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { getItemFromStorage, storeItem } from "utils/localStorage";

import {
  TitleWrapper,
  Main,
  StyledDiv,
  StyledLabel,
  StyledInput,
  HeadingWrapper,
  StyledContainer,
  StyledHeading2,
  Li,
} from "./style";

import { StyledHeading, ContentWrapper } from "../style";

interface PageContext {
  tags: string[];
}

interface Props {
  data: Data;
  pageContext: PageContext;
}

const Settings = ({
  data: {
    site: { siteMetadata },
    mdx: {
      frontmatter: { title, description },
      parent: { relativePath },
      body,
    },
  },
  pageContext,
}: Props) => {
  if (typeof location === "undefined") return null;

  let filterArr: string[] = getItemFromStorage("filter") || [];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    if (e.target.checked) {
      filterArr = filterArr.filter((tag) => tag !== name);
    } else {
      filterArr.push(name);
    }
    storeItem("filter", filterArr);
  };

  const tags = pageContext.tags.map((item) => {
    return {
      name: item,
      checked: !filterArr?.includes(item),
    };
  });

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
          <MDXRenderer>{body}</MDXRenderer>
        </TitleWrapper>
        <ContentWrapper>
          <Main>
            <StyledDiv>
              <HeadingWrapper>
                <StyledHeading2>Filter</StyledHeading2>
              </HeadingWrapper>
              <StyledContainer>
                {tags?.map((item, index) => (
                  <Li key={item.name + index.toString()}>
                    <StyledLabel>
                      <StyledInput
                        type="checkbox"
                        name="checkbox"
                        value={item.name}
                        defaultChecked={item.checked}
                        onChange={(e) => handleChange(e, item.name)}
                      ></StyledInput>
                      {item.name}
                    </StyledLabel>
                  </Li>
                ))}
              </StyledContainer>
            </StyledDiv>
          </Main>
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

export default Settings;
