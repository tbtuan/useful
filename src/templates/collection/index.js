import { graphql } from "gatsby";
import React, { useMemo } from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { calculateTreeData } from "utils/nestedTree";

import { StyledHeading, TitleWrapper } from "../style";
import { StyledLink, Ul, Li, Container, Main } from "./style";
import Layout from "templates/layout";
import { Padding } from "../style";
import Seo from "components/seo";

const Collection = (props) =>
  useMemo(() => {
    const { data } = props;

    if (typeof location === "undefined") return null;

    const {
      site: { siteMetadata },
      mdx: {
        frontmatter: { metaTitle, metaDescription },
        fields: { title },
        parent: { relativePath },
        body,
      },
      allMdx: { edges },
    } = data;

    const TreeNode = ({ url, title, layer, items }) => {
      const hasChildren = items.length !== 0;

      if (!layer) {
        layer = 0;
      }
      if (layer == 0) {
        return (
          <Container>
            {items.map((item, index) => (
              <TreeNode
                key={item.url + index.toString()}
                layer={layer + 1}
                {...item}
              />
            ))}
          </Container>
        );
      } else if (layer == 1) {
        const mappedItems = hasChildren
          ? items.map((item, index) => (
              <TreeNode
                key={item.url + index.toString()}
                layer={layer + 1}
                {...item}
              />
            ))
          : null;

        return (
          <div>
            {title && <h3>{title}</h3>}
            <Ul>
              <Li>{title && <StyledLink to={url}>Index</StyledLink>}</Li>
              {mappedItems}
            </Ul>
          </div>
        );
      } else {
        return (
          <Li>
            <StyledLink to={url}>{title}</StyledLink>
          </Li>
        );
      }
    };

    const treeData = calculateTreeData(edges, location.pathname);

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
            </TitleWrapper>
            <Main>
              <MDXRenderer>{body}</MDXRenderer>
              <TreeNode {...treeData} />
            </Main>
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
      }
      body
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
        }
      }
    }
  }
`;

export default Collection;
