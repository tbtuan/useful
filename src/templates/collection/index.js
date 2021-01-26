import { useState } from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

import { StyledHeading, TitleWrapper } from "../style";
import { StyledLink, Ul, Li, Container, Main } from "./style";

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

      const slicedParts = parts.slice(1, -1);

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
      const slicedLength = parts.length - 1;

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

    const slicedParts = parts.slice(1, -1);

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
      item.items = item.items.sort(function (a, b) {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      });
    });
    const slicedLength = parts.length - 1;

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

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div>
      <TitleWrapper>
        <StyledHeading>{mdx.fields.title}</StyledHeading>
      </TitleWrapper>
      <Main>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Tree edges={allMdx.edges} subpath={location.pathname} />
      </Main>
    </div>
  );
};

export default CollectionTemplate;