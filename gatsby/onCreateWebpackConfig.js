const { resolve } = require("path");

module.exports = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        icons: resolve(__dirname, "../static/icons"),
        "@": resolve(__dirname, "..", "src"),
      },
      modules: [resolve(__dirname, "../src"), "node_modules"],
    },
  });
};
