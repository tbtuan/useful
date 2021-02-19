import { graphql } from "gatsby";
import React from "react";
import Seo from "components/seo";

import Layout from "layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ModifiedText from "components/modifiedText";
import TableOfContents from "components/tableOfContents";
import Breadcrumb from "components/breadcrumb";

import {
  StyledHeading,
  TitleWrapper,
  ContentWrapper,
  StyledMainWrapper,
  Padding,
} from "../style";

interface Crumb {
  slug: string;
  title: string;
}

interface PageContext {
  crumbs: Crumb[];
}

interface Props {
  data: Data;
  pageContext: PageContext;
}

const Index = ({
  data: {
    site: { siteMetadata },
    mdx: {
      frontmatter: { date, title, description },
      parent: { relativePath },
      body,
      tableOfContents,
    },
  },
  pageContext,
}: Props) => {
  if (typeof location === "undefined") return null;

  return (
    <>
      <Seo metaTitle={title} metaDescription={description} />
      <Layout
        location={location}
        relativePath={relativePath}
        siteMetadata={siteMetadata}
      >
        <TitleWrapper>
          {pageContext?.crumbs?.length > 1 && (
            <Breadcrumb crumbs={pageContext?.crumbs} />
          )}
          <StyledHeading>{title}</StyledHeading>
          {date && <ModifiedText modifiedTime={date} />}
        </TitleWrapper>
        <ContentWrapper>
          <TableOfContents tableOfContents={tableOfContents} />
          <StyledMainWrapper>
            <MDXRenderer>{body}</MDXRenderer>
          </StyledMainWrapper>
        </ContentWrapper>
        <Padding />
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
        date
      }
    }
  }
`;

export default Index;
