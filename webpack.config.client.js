const path = require('path');
const webpack = require('webpack');

const CURRENT_WORKING_DIR = process.cwd();
const config ={
  name: "browser",
  mode: "development",
  devtool: 'eval-source-map',
  entry: [
    // 'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(CURRENT_WORKING_DIR, '/client/main.js')
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /Files/],
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|eot|svg|gif|jpng|png|jpg) (\?[\s\S+]?$)/,
        use: ['file-loader']
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    historyApiFallback: true
  }
}
module.exports = config;