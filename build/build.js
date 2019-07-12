/**
 * @author Lanceyi 2019-7-12 11:37:35
 * @description
 *  进行打包的脚本, 基于webpack-dev-server搭建
 */

const webpack = require('webpack')
const config = require('./webpack.prod.conf')

webpack(config, (err, status) => {
  if (err || status.hasErrors()) {
    // TODO 处理错误机制
    console.log(err)
    return
  }
  // 处理完成
  console.log(status.toString({
    chunks: false, // 使构建过程更静默无输出
    colors: true // 在控制台展示颜色
  }))
})
