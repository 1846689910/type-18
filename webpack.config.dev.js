module.exports = require("funny-react-app-archetype/config/webpack/webpack.config.dev");
module.exports.devServer.historyApiFallback.rewrites.push({
  from: /^\/favicon\.ico$/,
  to: "/js/favicon.ico"
});
