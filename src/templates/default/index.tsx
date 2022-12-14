import { graphql } from "gatsby";
import React, { useEffect, useContext } from "react";
import { SiteContext } from "providers/siteContext";
import Seo from "components/seo";

import ModifiedText from "components/modifiedText";
import TableOfContents from "components/tableOfContents";
import Breadcrumb from "components/breadcrumb";

import { stringToSlug } from "utils/slugify";

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
  children: string;
  pageContext: PageContext;
}

const Index = ({
  data: {
    mdx: {
      frontmatter: { date, title, description },
      headings,
    },
  },
  children,
  pageContext,
}: Props) => {
  if (typeof location === "undefined") return null;

  const siteContext = useContext(SiteContext);

  const tableOfContents = headings.filter(item => item.depth === 2).map((item) => {
    return {
      title: item.value,
      url: `#${stringToSlug(item.value)}`,
    };
  });

  useEffect(() => {
    siteContext.storePageVisited(title, location.pathname + location.hash);
  }, []);

  return (
    <>
      <Seo metaTitle={title == "/useful" ? title : title + " | /useful"} metaDescription={description} />
      <TitleWrapper>
        {pageContext?.crumbs?.length > 1 && (
          <Breadcrumb
            crumbs={pageContext?.crumbs.sort(
              (a, b) => a.slug.length - b.slug.length
            )}
          />
        )}
        <StyledHeading>{title}</StyledHeading>
        {date && <ModifiedText modifiedTime={date} />}
      </TitleWrapper>
      <ContentWrapper>
        <TableOfContents tableOfContents={tableOfContents} />
        <StyledMainWrapper>
          {children}
        </StyledMainWrapper>
      </ContentWrapper>
      <Padding />
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
      headings {
        value
        depth
      }
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
