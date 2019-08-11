module.exports = {
  extends: "funny-react-app-archetype/config/babel/babelrc-client.js",
  // presets: ["babel-preset-mobx"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ]
};
