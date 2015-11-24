webpack = require('webpack');
module.exports = {
  entry:[
    'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/js/entry' // entry point
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'react-hot!babel-loader?stage=0'}, //react-hot! 
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  output: {
    publicPath: 'http://127.0.0.1:3000/assets',
    path: __dirname + '/assets/',
    filename: 'main.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // ,new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production")
    //   }
    // })
  ]
};