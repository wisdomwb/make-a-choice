const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'//publicPath allows you to specify the base path for all the assets within your application.
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
      },
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader'
      }
    }, {
      test: /\.css/,
      use: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'// creates style nodes from JS strings
      }, {
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',// translates CSS into CommonJS
      }, {
        loader: 'less-loader'// compiles Less to CSS
      }],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true
        }
      }],
      include: [
        path.resolve(__dirname, 'node_modules'),
      ],
    }]
  },
  devServer: {
    historyApiFallback: true,//historyAPIFallback will redirect 404s to /index.html
    host: '0.0.0.0',//Specify a host to use. By default this is localhost. If you want your server to be accessible externally, specify it like this:
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin({
      // Options...
    })

  ],
  mode: 'none'
}