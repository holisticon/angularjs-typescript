var path = require("path");

// resolve paths
var sourceRoot = path.resolve(__dirname, '..', 'src'),
  testRoot = path.resolve(__dirname, '..', 'src'),
  distRoot = path.resolve(__dirname, '..', 'dist');
// overwrite defaults
var appConfig = {
  srcPath: 'src',
  testPath: 'test',
  testSpecs: '/specs/**/*.ts',
  junit: {
    title: 'ngTypeScript',
    dir: 'dist/test-reports'
  },
  appPath: 'src/index.ts',
  templatesPath: 'src',
  entry: {
    app: sourceRoot + '/index.ts',
  },
  indexFiles: [{
    filename: 'index.html',
    template: 'src/index.html',
    chunks: ['app', 'commons'],
    chunksSortMode: 'dependency'
  }],
  srcApp: path.resolve(sourceRoot),
  testApp: path.resolve(testRoot),
  srcSASS: path.resolve(sourceRoot, 'styles'),
  srcIMG: path.resolve(sourceRoot, 'img'),
  dist: distRoot,
  proxy: {
    '*': 'http://localhost:8080' // REST service
  }
};
module.exports = appConfig;