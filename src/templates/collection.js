import React, { useState } from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

import { Link } from "../components";
import config from "../../config";

import styled from "@emotion/styled";

const StyledHeading = styled("h1")`
  font-size: 32px;
  //font-size: 32px;
  line-height: 1.5;
  font-weight: 800;
  //font-weight: 500;
  //border-left: 2px solid ${({ theme }) => theme.colors.link};
  //padding: 0 16px;
  flex: 1;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.heading};
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.text} !important;
  font-size: 0.75rem;
`;

const StyledMainWrapper = styled("div")`
  color: ${(props) => props.theme.colors.text};

  ul,
  ol {
    li {
      font-size: 16px;
      line-height: 1.8;
      font-weight: 400;
    }
  }

  a {
    transition: color 0.15s;
    color: ${(props) => props.theme.colors.link};
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${(props) => props.theme.colors.background};
  }
`;

const CollectionTitleWrapper = styled("div")`
  display: flex;
  align-items: center;
  padding-bottom: 4rem;
  margin-bottom: 32px;
`;

const TitleWrapper = styled("div")`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(230, 236, 241);
  margin-bottom: 32px;
`;

const Container = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 20rem));
  grid-gap: 2rem;
`;

const Divider = styled((props) => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
    background: none;
  }
`;

const TreeNode = styled(({ url, title, layer, items, ...rest }) => {
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
    return (
      <div>
        {title && <Link to={url}>{title}</Link>}
        <Divider />
        {hasChildren ? (
          <div>
            {items.map((item, index) => (
              <TreeNode
                key={item.url + index.toString()}
                layer={layer + 1}
                {...item}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div>
        <StyledLink to={url}>{title}</StyledLink>
        <br />
      </div>
    );
  }
})``;

const calculateTreeData = (edges, subpath) => {
  const originalData = edges.filter(
    ({
      node: {
        fields: { slug },
      },
    }) => slug !== subpath && slug.startsWith(subpath)
  );

  const tree = originalData.reduce(
    (
      accu,
      {
        node: {
          fields: { slug, title },
        },
      }
    ) => {
      const parts = slug.split("/");

      let { items: prevItems } = accu;

      const slicedParts =
        config.gatsby && config.gatsby.trailingSlash
          ? parts.slice(1, -2)
          : parts.slice(1, -1);

      for (const part of slicedParts) {
        let tmp = prevItems && prevItems.find(({ label }) => label == part);

        if (tmp) {
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        prevItems = tmp.items;
      }
      const slicedLength =
        config.gatsby && config.gatsby.trailingSlash
          ? parts.length - 2
          : parts.length - 1;

      const existingItem = prevItems.find(
        ({ label }) => label === parts[slicedLength]
      );

      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
      } else {
        prevItems.push({
          label: parts[slicedLength],
          url: slug,
          items: [],
          title,
        });
      }
      return accu;
    },
    { items: [] }
  );

  const tmp = [""];
  tmp.reverse();
  const tmp2 = tmp.reduce((accu, slug) => {
    const parts = slug.split("/");

    let { items: prevItems } = accu;

    const slicedParts =
      config.gatsby && config.gatsby.trailingSlash
        ? parts.slice(1, -2)
        : parts.slice(1, -1);

    for (const part of slicedParts) {
      let tmp = prevItems.find((item) => item && item.label == part);

      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp);
      }
      if (tmp && tmp.items) {
        prevItems = tmp.items;
      }
    }
    // sort items alphabetically.
    prevItems.map((item) => {
      item.items = item.items.sort(function(a, b) {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      });
    });
    const slicedLength =
      config.gatsby && config.gatsby.trailingSlash
        ? parts.length - 2
        : parts.length - 1;

    const index = prevItems.findIndex(
      ({ label }) => label === parts[slicedLength]
    );

    if (prevItems.length) {
      accu.items.unshift(prevItems.splice(index, 1)[0]);
    }
    return accu;
  }, tree);
  return tmp2.items[0];
};

const Tree = ({ edges, subpath }) => {
  let [treeData] = useState(() => {
    return calculateTreeData(edges, subpath);
  });
  return <TreeNode {...treeData} />;
};

const CollectionTemplate = ({ data, location }) => {
  if (!data || !location) {
    return null;
  }
  const { allMdx, mdx } = data;

  let canonicalUrl = config.gatsby.siteUrl;

  canonicalUrl =
    config.gatsby.pathPrefix !== "/"
      ? canonicalUrl + config.gatsby.pathPrefix
      : canonicalUrl;
  canonicalUrl = canonicalUrl + mdx.fields.slug;

  return (
    <div>
      <CollectionTitleWrapper>
        <StyledHeading>{mdx.fields.title}</StyledHeading>
      </CollectionTitleWrapper>
      <StyledMainWrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {typeof window === "undefined" ? null : (
          <Tree edges={allMdx.edges} subpath={location.pathname} />
        )}
      </StyledMainWrapper>
    </div>
  );
};

export default CollectionTemplate;
