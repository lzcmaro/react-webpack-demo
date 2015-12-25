var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack-dev.config');

new WebpackDevServer(webpack(config), {
  // publicPath: config.output.publicPath,
  contentBase: 'examples/',
  hot: true,
  historyApiFallback: true
}).listen(2000, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:2000');
});