module.exports = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@emotion/babel-plugin`,
    options: {
      sourceMap: true,
    },
  });
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
      reactImportSource: "@emotion/react",
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
