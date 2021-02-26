import React from "react";
import Layout from "components/layout";
import {
  StyledHeading,
  TitleWrapper,
  ContentWrapper,
  StyledMainWrapper,
  Padding,
} from "templates/style";

export default function NotFound() {
  if (typeof window === "undefined") return null;
  return (
    <Layout location={location} relativePath="/" siteMetadata={null}>
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
