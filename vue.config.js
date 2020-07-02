const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Timestamp = new Date().getTime();

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './', //打包
  lintOnSave: false, //去掉代码检查
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
  devServer: {
    // 项目运行时候的端口号
    port: 4000
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#00a089',
          'link-color': '#00a089',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      }),
      new MiniCssExtractPlugin({
        // 修改打包后css文件名
        filename: `css/[name].${Timestamp}.css`,
        chunkFilename: `css/[name].${Timestamp}.css`
      })
    ],
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${Timestamp}.js`,
      chunkFilename: `js/[name].${Timestamp}.js`
    }
  }
}