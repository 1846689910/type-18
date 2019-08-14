const shell = require("shelljs");
const logger = require("funny-react-app-archetype/config/utils/color-logger");
const method = process.argv[2];

const baseCommands = {
  runDevServer: `$\"webpack-dev-server\" --config webpack.config.dev.js --progress --color` // eslint-disable-line
};

const methods = {
  runDev() {
    shell.exec(baseCommands.runDevServer, {
      env: { NODE_ENV: "development", PATH: process.env.PATH + ":/usr/local/bin" }
    });
  },
  runProd() {
    shell.exec(baseCommands.runDevServer, {
      env: {
        NODE_ENV: "production",
        MOCK_PROD_IN_DEV: "true",
        PATH: process.env.PATH + ":/usr/local/bin"
      }
    });
  }
};

if (methods[method]) {
  methods[method]();
} else {
  logger.danger("No matched command found");
}
