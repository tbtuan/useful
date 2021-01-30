import Layout from "templates/layout";
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
    <Layout location={location} relativePath="/" siteMetadata="Error">
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
