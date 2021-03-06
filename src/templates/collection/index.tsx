import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { StyledHeading, TitleWrapper, Padding } from "../style";
import { Container, Main } from "./style";
import Seo from "components/seo";
import Section from "components/section";

interface Props {
  data: Data;
}

const Links = ({ data }: Props) => {
  if (typeof location === "undefined") return null;

  const {
    mdx: {
      frontmatter: { title, description },
      body,
    },
    allMdx: { edges },
  } = data;

  const SectionContainer = ({ edges }: AllMdx) => {
    return (
      <Container>
        {edges.map(({ node }) => (
          <Section key={node.fields.id} node={node}></Section>
        ))}
      </Container>
    );
  };

  return (
    <>
      <Seo metaTitle={title} metaDescription={description} />
      <TitleWrapper>
        <StyledHeading>{title}</StyledHeading>
      </TitleWrapper>
      <Main>
        <MDXRenderer>{body}</MDXRenderer>
        <SectionContainer edges={edges} />
      </Main>
      <Padding />
    </>
  );
};

export const pageQuery = graphql`
  query($id: String!, $slugRegex: String!) {
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
    allMdx(filter: { slug: { regex: $slugRegex } }, sort: { fields: slug }) {
      edges {
        node {
          frontmatter {
            description
            tags
          }
          fields {
            slug
            title
            id
          }
          tableOfContents
        }
      }
    }
  }
`;

export default Links;
