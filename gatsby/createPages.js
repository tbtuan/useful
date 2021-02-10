const { resolve } = require("path");
const fs = require("fs");

const QUERY = `
{
  allMdx {
    edges {
      node {
        fields {
          title
          id
        }
        tableOfContents
        fields {
          slug
        }
      }
    }
  }
}
`;

const SEARCH_INDEX = "searchIndex.json";

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(QUERY);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create search index
  let searchIndex = [];

  // Create blog posts pages.
  result.data.allMdx.edges.forEach(({ node }) => {
    let tocConcat = [];
    if (node.tableOfContents.items) {
      tocConcat = node.tableOfContents.items.map((item) => {
        return { title: item.title, url: item.url };
      });
    }
    searchIndex.push({
      id: node.fields.id,
      title: node.fields.title,
      url: node.fields.slug,
      toc: tocConcat,
    });
    switch (node.fields.slug) {
      case "/":
        createPage({
          path: node.fields.slug,
          component: resolve("./src/templates/main/index.js"),
          context: {
            id: node.fields.id,
          },
        });
        break;
      case "/lang":
        createPage({
          path: node.fields.slug,
          component: resolve("./src/templates/collection/index.js"),
          context: {
            id: node.fields.id,
          },
        });
        break;
      default:
        createPage({
          path: node.fields.slug,
          component: resolve("./src/templates/default/index.js"),
          context: {
            id: node.fields.id,
          },
        });
        break;
    }
  });
  fs.writeFileSync(`public/${SEARCH_INDEX}`, JSON.stringify(searchIndex));
};
