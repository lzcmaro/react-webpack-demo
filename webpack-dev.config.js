var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:[
    'webpack-dev-server/client?http://127.0.0.1:2000', // WebpackDevServer host and port
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'examples/app.js') // entry point
  ],
  output: {
    // publicPath: '/',
    path: path.resolve(__dirname, 'examples'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.sass$|\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.(js|jsx)$/, exclude: /node_modules/, include: __dirname, loader: 'react-hot!babel-loader?stage=0'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};