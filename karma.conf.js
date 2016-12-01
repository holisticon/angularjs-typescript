process.env['APP_CONFIG'] = require("path").resolve(__dirname, 'etc', 'appConfig.js');
module.exports = require('@holisticon/angularjs-common').karma;