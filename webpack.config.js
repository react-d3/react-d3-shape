
'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './example/src';
var js_dist = path.join(__dirname, './example/dist/origin');

module.exports = [{
  name: 'shape',
  entry: {
    line: js_root + '/line.jsx',
    scatter: js_root + '/scatter.jsx',
    area_stack: js_root + '/area_stack.jsx',
    bar: js_root + '/bar.jsx',
    bar_horizontal: js_root + '/bar_horizontal.jsx',
    bar_group: js_root + '/bar_group.jsx',
    bar_group_horizontal: js_root + '/bar_group_horizontal.jsx',
    bar_stack: js_root + '/bar_stack.jsx',
    bar_stack_horizontal: js_root + '/bar_stack_horizontal.jsx',
    pie: js_root + '/pie.jsx',
    donut: js_root + '/donut.jsx'
  },

  output: {
    path: js_dist,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  }
}];
