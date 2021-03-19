export const calculateTreeData = (edges: Edges[]) => {
  const tree = edges.reduce(
    (
      accu,
      {
        node: {
          fields: { slug, title },
          frontmatter: { tags },
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

      prevItems.push({
        label: parts[slicedLength],
        url: slug,
        tags: tags,
        items: [],
        title,
      });
      return accu;
    },
    { items: [] }
  );

  return tree.items[0];
};
