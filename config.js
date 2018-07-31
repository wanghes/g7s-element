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
  externals[`g7s-element/packages/${key}`] = `g7s-element/lib/${key}`;
});

externals['g7s-element/src/locale'] = 'g7s-element/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`g7s-element/src/utils/${file}`] = `g7s-element/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`g7s-element/src/mixins/${file}`] = `g7s-element/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`g7s-element/src/transitions/${file}`] = `g7s-element/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
    main: path.resolve(__dirname, './src'),
    packages: path.resolve(__dirname, './packages'),
    'g7s-element': path.resolve(__dirname, './')
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
