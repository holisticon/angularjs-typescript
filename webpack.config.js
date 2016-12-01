process.env['APP_CONFIG'] = require("path").resolve(__dirname, 'etc', 'appConfig.js');
const webpackConfig = require('@holisticon/angularjs-common').webpack;
module.exports = webpackConfig;