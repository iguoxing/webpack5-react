/*
 * @Author: your name
 * @Date: 2021-11-14 13:31:40
 * @LastEditTime: 2021-11-14 14:08:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react_webpack5/webpack5-react/webpack.config.js
 */
// Copyright 2021 zhaoguoxing
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')//html打包
const {CleanWebpackPlugin} = require('clean-webpack-plugin')//打包前清除dist
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');//命令行友好提示
//HRM 自动刷新 live relaoding
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',//报错的时候更好的追踪代码和给出错误代码出现的地方的提示
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SnowWorf-Webpack5',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new friendlyErrorsWebpackPlugin(),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
       // Fonts and SVGs
       {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          }, 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // ...
  devServer: {
    historyApiFallback: true,
    static: {
        directory: path.join(__dirname, 'public'),
    },
    open: false,
    hot: true,
    // quiet: true,
    port: 8082,
  },
}
