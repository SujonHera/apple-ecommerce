const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path:path.join(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },{
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]'
                  }
                }
            ]
          },
          {
            test: /\.(png|jpg)$/,
            use: {
              loader: "url-loader",
            },
          },
        ]
      },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  }