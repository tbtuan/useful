import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import ModifiedText from "../components/modifiedText";
import TableOfContents from "../components/tableOfContents";

import styled from "@emotion/styled";

const StyledHeading = styled("h1")`
  font-size: 32px;
  line-height: 1.5;
  font-weight: 800;
  flex: 1;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.heading};
`;

const StyledMainWrapper = styled("div")`
  color: ${(props) => props.theme.colors.text};
  max-width: calc(100% - 14rem);

  @media only screen and (max-width: 1023px) {
    max-width: 100%;
  }
`;

const TitleWrapper = styled("div")`
  padding-bottom: 4rem;

  @media only screen and (max-width: 1023px) {
    padding-bottom: 2rem;
  }
`;

const ContentWrapper = styled("div")`
  display: flex;
  align-items: flex-start;

  @media only screen and (max-width: 1023px) {
    display: block;
  }
`;

const DocsTemplate = ({ mdx }) => (
  <div>
    <TitleWrapper>
      <StyledHeading>{mdx.fields.title}</StyledHeading>
      <ModifiedText modifiedTime={mdx.parent.modifiedTime} />
    </TitleWrapper>
    <ContentWrapper>
      <TableOfContents tableOfContents={mdx.tableOfContents} />
      <StyledMainWrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </StyledMainWrapper>
    </ContentWrapper>
  </div>
);

export default DocsTemplate;
