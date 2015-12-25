var webpack = require('webpack');

module.exports = {
  entry: './src/entry',
  output: {
    path: './assets',
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
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ],
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ]
};