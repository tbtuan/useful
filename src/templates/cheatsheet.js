import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import ModifiedText from "../components/modifiedText";
import TableOfContents from "../components/tableOfContents";
import {
  StyledHeading,
  TitleWrapper,
  ContentWrapper,
  StyledMainWrapper,
} from "../components/templates";

const CheatsheetTemplate = ({ mdx }) => (
  <div>
    <TitleWrapper>
      <StyledHeading>{mdx.fields.title}</StyledHeading>
      <ModifiedText modifiedTime={mdx.frontmatter.date} />
    </TitleWrapper>
    <ContentWrapper>
      <TableOfContents mdx={mdx} />
      <StyledMainWrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </StyledMainWrapper>
    </ContentWrapper>
  </div>
);

export default CheatsheetTemplate;
