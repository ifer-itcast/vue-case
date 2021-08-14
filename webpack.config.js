const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development', // 默认 production
  // 不配置 SourceMap，出错的信息是打包好后的代码的行数
  // 行数、源码
  // devtool: 'eval-source-map', // 开发
  // 行数、源码、文件
  devtool: 'source-map',
  // 项目上线关闭 SourceMap：直接 npm run build，生成的不包含 SourceMap，安全
  // 只暴露行数（方便调试），不暴露源码（安全），会生成 SourceMap 文件
  // devtool: 'nosources-source-map', // 上线
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        type: 'asset'
        // 小于 8kb，会把图片转成 base64，打包进 JS
        // 大于 8kb，打包进 dist 文件夹
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:6][ext]'
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000
  }
};