/*
 * @Author: your name
 * @Date: 2021-11-14 13:31:40
 * @LastEditTime: 2021-11-14 14:08:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react_webpack5/webpack5-react/webpack.config.js
 */
// Copyright 2021 zhaoguoxing
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')//html打包
const {CleanWebpackPlugin} = require('clean-webpack-plugin')//打包前清除dist
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');//命令行友好提示
const BundleAnalyzerPlugin =require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//HRM 自动刷新 live relaoding
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',//报错的时候更好的追踪代码和给出错误代码出现的地方的提示
  entry: {
    app: './src/index.tsx'//为什么要弄多个entry？
  },
  optimization:{
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks:{
      chunks: 'all',//分片
      minChunks: 1,
      cacheGroups: {
        vendors: {
          chunks: 'initial',
          enforce: true,
          // name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            // console.log('参与');
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item) => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `ardenzhao-${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          priority: -10,
          // reuseExistingChunk: true,
        },
        commons: {
          chunks: 'all',
          name: 'commons',
          priority: -20,
          //忽略 minSize，minChunks，maxAsyncRequests和maxInitialRequests外面选项
          // enforce: true,
          reuseExistingChunk: true,
        },
      },
      //只有超过了这个字节的才会打包
      // 要不要打这个总包出来
      minSize: {
        javascript: 0,
        style: 0,
      },
      // //经验值 拆掉abc ->总包
      maxSize: {
        javascript: 110000,
        style: 110000,
      },
    }
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
    new BundleAnalyzerPlugin(),//分析
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
