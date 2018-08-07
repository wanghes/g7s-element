var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('./components.json');
var saladConfig = require('./salad.config.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, './src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, './src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, './src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`@ued/element/packages/${key}`] = `@ued/element/lib/${key}`;
});

externals['@ued/element/src/locale'] = '@ued/element/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`@ued/element/src/utils/${file}`] = `@ued/element/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`@ued/element/src/mixins/${file}`] = `@ued/element/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`@ued/element/src/transitions/${file}`] = `@ued/element/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
    main: path.resolve(__dirname, './src'),
    packages: path.resolve(__dirname, './packages'),
    '@ued/element': path.resolve(__dirname, './')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|src\/utils\/popper\.js|src\/utils\/date.\js/;

exports.postcss = function(webapck) {
  saladConfig.features.partialImport = {
    addDependencyTo: webapck
  };
  return [
    require('postcss-salad')(saladConfig)
  ];
};
