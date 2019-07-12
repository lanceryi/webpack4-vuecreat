/**
 * @author Lanceyi 2019-7-12 11:38:08
 * @description 
 *  生产环境的配置
 */

const path = require("path")
const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const baseConfig = require("./webpack.base.conf")

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})