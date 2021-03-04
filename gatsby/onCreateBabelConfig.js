module.exports = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@emotion/babel-plugin`,
    options: {
      sourceMap: true,
    },
  });
  actions.setBabelPreset({
    name: `babel-preset-gatsby`,
    options: {
      reactRuntime: "automatic",
      reactImportSource: "@emotion/react",
    },
  });
};
