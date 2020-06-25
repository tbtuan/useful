import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import ModifiedText from "../components/modifiedText";
import styled from "@emotion/styled";
import TableOfContents from "../components/tableOfContents";

const StyledHeading = styled("h1")`
  font-size: 32px;
  //font-size: 32px;
  line-height: 1.5;
  font-weight: 800;
  //font-weight: 500;
  //border-left: 2px solid ${({ theme }) => theme.colors.link};
  //padding: 0 16px;
  flex: 1;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.heading};
`;

const StyledMainWrapper = styled("div")`
  color: ${(props) => props.theme.colors.text};
  max-width: calc(100% - 14rem);

  ul,
  ol {
    li {
      font-size: 16px;
      line-height: 1.8;
      font-weight: 400;
    }
  }

  a {
    transition: color 0.15s;
    color: ${(props) => props.theme.colors.link};
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${(props) => props.theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    max-width: 100%;
  }
`;

const TitleWrapper = styled("div")`
  padding-bottom: 4rem;
`;

const ContentWrapper = styled("div")`
  display: flex;
  align-items: flex-start;

  @media only screen and (max-width: 1023px) {
    display: block;
  }
`;

const CheatsheetTemplate = ({ data }) => {
  if (!data) {
    return null;
  }
  const { mdx, allMdx } = data;

  return (
    <div>
      <TitleWrapper>
        <StyledHeading>{mdx.fields.title}</StyledHeading>
        <ModifiedText modifiedTime={mdx.parent.modifiedTime} />
      </TitleWrapper>
      <ContentWrapper>
        <TableOfContents location={location} allMdx={allMdx} />
        <StyledMainWrapper>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </StyledMainWrapper>
      </ContentWrapper>

      {/* <StyledMainWrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </StyledMainWrapper> */}
    </div>
  );
};

export default CheatsheetTemplate;
