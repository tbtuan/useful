import { graphql } from "gatsby";

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
    },
    children,
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
        {children}
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
    allMdx(filter: { fields: {slug: { regex: $slugRegex } }}, sort: {fields: {slug: ASC}}) {
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
