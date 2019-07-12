/**
 * @author Lanceyi 2019-7-12
 * @description 基础的打包配置,开发环境和生产环境都要用到的配置 
 */

const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].[hash].js",
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, "../src"),
    }
  },
  module: {
    rules: [
      // babel-loader
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      // file-loader
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
      // vue-loader
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // css-loader postcss-loader 
      // 创建postcss.config.js配置autoprefixer
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== "production"
          ? 'vue-style-loader'
          : MiniCssExtractPlugin.loader, 
          'css-loader', 'postcss-loader']
      },
      // 处理 .scss后缀的css
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== "production"
          ? 'vue-style-loader'
          : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // 处理 .cass后缀的css
      {
        test: /\.sass$/,
        use: [
          process.env.NODE_ENV !== "production"
          ? 'vue-style-loader'
          : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html")
    }),
    // 识别vue单文件组件
    new VueLoaderPlugin(),
    // 提取共同代码
    new webpack.optimize.SplitChunksPlugin(),
    // css提取
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}


