import { graphql } from "gatsby";
import React from "react";
import Seo from "components/seo";

import Layout from "layout";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
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

const Settings = (props) => {
  const { data, pageContext } = props;

  if (typeof location === "undefined") return null;
  const {
    site: { siteMetadata },
    mdx: {
      frontmatter: { title, description },
      parent: { relativePath },
      body,
    },
  } = data;

  let filterArr = getItemFromStorage("filter") || [];
  const handleChange = (e, name) => {
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
                {tags &&
                  tags.map((item, index) => (
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
