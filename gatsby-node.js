const path = require("path");

const fs = require("fs");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
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
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        const filename = "searchIndex.json";

        // Create search index
        let searchIndex = [];

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          let tocConcat = [];
          if (node.tableOfContents.items) {
            tocConcat = node.tableOfContents.items.map((item) => item.title);
          }
          searchIndex.push({
            id: node.fields.id,
            title: node.fields.title,
            url: node.fields.slug,
            toc: tocConcat,
          });
          createPage({
            path: node.fields.slug ? node.fields.slug : "/",
            component: path.resolve("./src/components/index.js"),
            context: {
              id: node.fields.id,
            },
          });
        });
        fs.writeFileSync(`public/${filename}`, JSON.stringify(searchIndex));
      })
    );
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page };

    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1];
    page.matchPath = `/${langCode}/*`;

    // Recreate the modified page
    deletePage(oldPage);
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-class-properties",
  });
  actions.setBabelPlugin({
    name: `babel-plugin-emotion`,
    options: {
      sourceMap: true,
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    let value = parent.relativePath.replace(parent.ext, "");

    if (value === "index") {
      value = "";
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`,
    });

    createNodeField({
      name: "id",
      node,
      value: node.id,
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title,
    });
  }
};
