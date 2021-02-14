/** edges consists of node with fields { slug, title} */
export const calculateTreeData = (edges, subpath) => {
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

      const existingItem = prevItems.find(
        ({ label }) => label === parts[slicedLength]
      );

      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
        existingItem.tags = tags;
      } else {
        prevItems.push({
          label: parts[slicedLength],
          url: slug,
          tags: tags,
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
