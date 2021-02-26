import React from "react";
import { graphql } from "gatsby";
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
    <>
      <div>
        <TitleWrapper>
          <StyledHeading>Page not found</StyledHeading>
        </TitleWrapper>
        <ContentWrapper>
          <StyledMainWrapper>...yet.</StyledMainWrapper>
        </ContentWrapper>
      </div>
      <Padding />
    </>
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
