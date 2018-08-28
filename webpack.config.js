const path = require('path');
var config = {
    entry: './main.js',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devtool: "#eval-source-map",
    devServer: {
       inline: true,
       port: 8080,
    },
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react', 'env']
             },
          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
       ]
    }
 }
 module.exports = config;