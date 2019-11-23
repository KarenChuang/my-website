var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      '@': './src/'
    }
  },
  devServer: {
    port: 8088,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [{
        test: /\.(js|tsx|ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(jpeg|png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{
            loader: "css-loader"
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ]),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};