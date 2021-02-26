import React from "react";
import { graphql } from "gatsby";
import Layout from "components/layout";
import {
  StyledHeading,
  TitleWrapper,
  ContentWrapper,
  StyledMainWrapper,
  Padding,
} from "templates/style";

interface Props {
  data: Data;
}

export default function NotFound({
  data: {
    site: { siteMetadata },
  },
}: Props) {
  if (typeof window === "undefined") return null;
  return (
    <Layout location={location} relativePath="" siteMetadata={siteMetadata}>
      <div>
        <TitleWrapper>
          <StyledHeading>Page not found</StyledHeading>
        </TitleWrapper>
        <ContentWrapper>
          <StyledMainWrapper>...yet.</StyledMainWrapper>
        </ContentWrapper>
      </div>
      <Padding />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        docsLocation
        githubUrl
      }
    }
  }
`;
