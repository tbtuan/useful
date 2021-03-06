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
          slug
        }
        frontmatter {
          tags
        }
        tableOfContents
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

  let searchIndex = [],
    crumbs = [],
    tags = [];
  result.data.allMdx.edges.forEach(({ node }) => {
    // Create breadcrumbs
    crumbs.push({
      title: node.fields.title,
      slug: node.fields.slug,
    });
    // Create search index
    searchIndex.push({
      id: node.fields.id,
      title: node.fields.title,
      url: node.fields.slug,
      toc:
        node.tableOfContents.items &&
        node.tableOfContents.items.map((item) => {
          return { title: item.title, url: item.url };
        }),
    });
    if (node.frontmatter.tags !== null) {
      tags.push(node.frontmatter.tags);
    }
  });
  tags = [...new Set([].concat.apply([], tags))].sort();

  // Create blog posts pages.
  result.data.allMdx.edges.forEach(({ node }) => {
    switch (node.fields.slug) {
      case "/":
        createPage({
          path: node.fields.slug,
          component: resolve("./src/templates/main/index.tsx"),
          context: {
            id: node.fields.id,
          },
        });
        break;
      case "/settings":
        createPage({
          path: node.fields.slug,
          component: resolve("./src/templates/settings/index.tsx"),
          context: {
            id: node.fields.id,
            tags: tags,
          },
        });
        break;
      case "/lang":
        createPage({
          path: node.fields.slug,
          component: resolve("./src/templates/lang/index.tsx"),
          context: {
            id: node.fields.id,
          },
        });
        break;
      case "/commands":
      case "/setups":
      case "/links":
      case "/shortcuts":
        createPage({
          path: node.fields.slug,
          component: resolve("./src/templates/collection/index.tsx"),
          context: {
            id: node.fields.id,
            // e.g /links//
            slugRegex: `${node.fields.slug}//`,
          },
        });
        break;
      default:
        const slugArr = node.fields.slug.split("/");

        createPage({
          path: node.fields.slug,
          component: resolve("./src/templates/default/index.tsx"),
          context: {
            id: node.fields.id,
            crumbs: crumbs
              .filter((crumb) => {
                // Returns an array of crumbs according to the current slug
                // crumbs array is sorted
                if (crumb.slug === "/") {
                  return false;
                }
                const crumbParts = crumb.slug.split("/");
                for (const crumbPart of crumbParts) {
                  if (slugArr.indexOf(crumbPart) === -1) {
                    return false;
                  }
                }
                return true;
              })
              .sort((a, b) => a.slug.length - b.slug.length),
          },
        });
        break;
    }
  });
  fs.writeFileSync(`public/${SEARCH_INDEX}`, JSON.stringify(searchIndex));
};
