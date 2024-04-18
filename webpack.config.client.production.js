const path = require('path');
const webpack = require('webpack');

const CURRENT_WORKING_DIR = process.cwd();

const config ={
  mode: "production",
  entry: [ path.join(CURRENT_WORKING_DIR, './server/server.js')],
  output:{
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'server.generate.js',
    publicPath: '/dist/',
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ttf|eot|svg|gif|jpng|png) (\?[\s\S+]?$)/,
        use: ['file-loader']
      }
    ]
  }
}
module.exports = config