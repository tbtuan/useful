import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Cheatsheet from './cheatsheet';
import Collection from './collection';
import Docs from './docs';

import { Layout } from '../components';
import config from '../../config';

import styled from '@emotion/styled';

const StyledHeading = styled('h1')`
  font-size: 32px;
  line-height: 1.5;
  font-weight: 500;
  border-left: 2px solid ${({ theme }) => theme.colors.link};
  padding: 0 16px;
  flex: 1;
  margin-top: 0;
  padding-top: 0;
  color: ${props => props.theme.colors.heading};
`;

const Padding = styled('div')`
  padding: 50px 0;
`;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;

    if (!data) {
      return null;
    }
    const { mdx } = data;

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;

    const metaDescription = mdx.frontmatter.metaDescription;

    const type = mdx.frontmatter.type;

    let canonicalUrl = config.gatsby.siteUrl;

    canonicalUrl =
      config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    const MarkdownFormat = ({ data, type }) => {
      switch (type) {
        case 'collection':
          return <Collection data={data} />;
        case 'cheatsheet':
          return <Cheatsheet data={data} />;
        default:
          return <Docs data={data} />;
      }
    };

    return (
      <Layout {...this.props}>
        {metaTitle ? <title>{metaTitle}</title> : null}
        {metaTitle ? <meta name="title" content={metaTitle} /> : null}
        {metaDescription ? <meta name="description" content={metaDescription} /> : null}
        {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
        {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
        <link rel="canonical" href={canonicalUrl} />
        <MarkdownFormat data={data} type={type} />
        <Padding />
      </Layout>
    );
  }
}

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
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
          tableOfContents
        }
      }
    }
  }
`;
