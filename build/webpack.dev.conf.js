/**
 * @author Lanceyi 2019-7-12 11:38:08
 * @description
 *  开发环境的配置
 */

const webpack = require('webpack')
const path = require("path")
const merge = require("webpack-merge")
const baseConfig = require("./webpack.base.conf")

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-sourse-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    open: true,
    hot: true
  },
  plugins: [
    // 开启热更新插件
    new webpack.HotModuleReplacementPlugin()
  ]
})
