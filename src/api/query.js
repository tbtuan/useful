import { graphql } from "gatsby";

export default graphql`
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
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
          parent {
            ... on File {
              relativePath
            }
          }
          tableOfContents
        }
      }
    }
  }
`;