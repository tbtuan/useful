import { graphql } from "gatsby";
import React, { useMemo } from "react";
import Seo from "components/seo";

import Layout from "templates/layout";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import ModifiedText from "components/modifiedText";
import TableOfContents from "components/tableOfContents";
import {
  StyledHeading,
  TitleWrapper,
  ContentWrapper,
  StyledMainWrapper,
  Padding,
} from "./style";

const Index = (props) =>
  useMemo(() => {
    const { data } = props;

    if (typeof location === "undefined") return null;
    const {
      site: { siteMetadata },
      mdx: {
        frontmatter: { date, metaTitle, metaDescription },
        fields: { title, slug },
        parent: { relativePath },
        body,
        tableOfContents,
      },
    } = data;
    return (
      <>
        <Seo metaTitle={metaTitle} metaDescription={metaDescription} />
        <Layout
          location={location}
          relativePath={relativePath}
          siteMetadata={siteMetadata}
        >
          <div>
            <TitleWrapper>
              <StyledHeading>{title}</StyledHeading>
              <ModifiedText modifiedTime={date} />
            </TitleWrapper>
            <ContentWrapper>
              <TableOfContents tableOfContents={tableOfContents} slug={slug} />
              <StyledMainWrapper>
                <MDXRenderer>{body}</MDXRenderer>
              </StyledMainWrapper>
            </ContentWrapper>
          </div>
          <Padding />
        </Layout>
      </>
    );
  }, [props]);

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
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        type
        date
      }
    }
  }
`;

export default Index;
