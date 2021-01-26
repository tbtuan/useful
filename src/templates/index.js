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
import "normalize.css";

const Index = (props) =>
  useMemo(() => {
    const { data } = props;

    if (!data) return null;
    const { mdx } = data;

    // meta tags
    if (!mdx) return props.children;
    const { metaTitle, metaDescription } = mdx.frontmatter;

    return (
      <>
        <Seo metaTitle={metaTitle} metaDescription={metaDescription} />
        <Layout {...props}>
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
          <Padding />
        </Layout>
      </>
    );
  }, [props]);

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
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
