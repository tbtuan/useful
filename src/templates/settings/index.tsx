import { graphql } from "gatsby";
import { useContext } from "react";
import Seo from "components/seo";
import { SiteContext } from "providers/siteContext";
import { ThemeSwitch } from "components/header/options/themeSwitch";

import { MDXRenderer } from "gatsby-plugin-mdx";

import {
  TitleWrapper,
  Main,
  StyledDiv,
  CheckboxContainer,
  Checkbox,
  StyledInput,
  HeadingWrapper,
  SwtichWrapper,
  StyledContainer,
  StyledHeading2,
  Li,
  StyledLink,
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
    mdx: {
      frontmatter: { title, description },
      body,
    },
  },
  pageContext,
}: Props) => {
  if (typeof location === "undefined") return null;

  const siteContext = useContext(SiteContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    if (e.target.checked) {
      siteContext.includeTags(name);
    } else {
      siteContext.excludeTags(name);
    }
  };

  const handleClick = (item) => {
    console.log(item);
    if (item.checked) {
      siteContext.includeTags(item.name);
    } else {
      siteContext.excludeTags(item.name);
    }
  };

  const tags = pageContext.tags.map((item) => {
    return {
      name: item,
      checked: !siteContext.filter?.includes(item),
    };
  });

  return (
    <>
      <Seo metaTitle={title} metaDescription={description} />
      <TitleWrapper>
        <StyledHeading>{title}</StyledHeading>
        <MDXRenderer>{body}</MDXRenderer>
      </TitleWrapper>
      <ContentWrapper>
        <Main>
          <StyledDiv>
            <HeadingWrapper>
              <StyledHeading2>Page</StyledHeading2>
            </HeadingWrapper>
            <span>
              <span>Light/dark mode</span>
              <SwtichWrapper>
                <ThemeSwitch />
              </SwtichWrapper>
            </span>
            <HeadingWrapper>
              <StyledHeading2>Filter</StyledHeading2>
            </HeadingWrapper>
            <StyledContainer>
              {tags?.map((item, index) => (
                <Li key={item.name + index.toString()}>
                  <CheckboxContainer>
                    <StyledInput
                      id={"check-" + item.name}
                      type="checkbox"
                      name="checkbox"
                      value={item.name}
                      defaultChecked={item.checked}
                      onChange={(e) => handleChange(e, item.name)}
                    ></StyledInput>
                    <label htmlFor={"check-" + item.name}>{item.name}</label>
                  </CheckboxContainer>
                </Li>
              ))}
            </StyledContainer>
            <StyledLink onClick={() => window.history.back()}>Back</StyledLink>
          </StyledDiv>
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

export default Settings;
