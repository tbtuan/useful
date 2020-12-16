module.exports = ({ actions }) => {
    actions.setBabelPlugin({
        name: "@babel/plugin-proposal-class-properties",
    });
    actions.setBabelPlugin({
        name: `@emotion/babel-plugin`,
        options: {
            sourceMap: true,
        },
    });
};