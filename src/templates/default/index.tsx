import { graphql } from "gatsby";
import React, { useState } from "react";
import Seo from "components/seo";

import Layout from "components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ModifiedText from "components/modifiedText";
import TableOfContents from "components/tableOfContents";
import Breadcrumb from "components/breadcrumb";

import { getItemFromStorage, storeItem } from "utils/localStorage";

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
  pageContext: PageContext;
}

const Index = ({
  data: {
    site: { siteMetadata },
    mdx: {
      frontmatter: { date, title, description },
      parent: { relativePath },
      body,
      headings,
    },
  },
  pageContext,
}: Props) => {
  if (typeof location === "undefined") return null;
  const tableOfContents = headings.map((item) => {
    return {
      title: item.value,
      url: `#${stringToSlug(item.value)}`,
    };
  });
  let visistedArr = getItemFromStorage("page_visited");
  if (!visistedArr) {
    visistedArr = [];
  }

  const offset = location.href.indexOf("#");
  const fragment = location.href.substring(offset);
  const url =
    offset !== -1 ? location?.pathname + fragment : location?.pathname;
  visistedArr = visistedArr?.filter((item) => item.url !== url)?.slice(0, 9);
  visistedArr.unshift({
    text: offset !== -1 ? title + " (" + fragment + ")" : title,
    url: url,
    relevance: 0,
  });
  storeItem("page_visited", visistedArr);

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
      headings(depth: h2) {
        value
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
