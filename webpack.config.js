var config = require('config')
var webpack = require('webpack')

module.exports = {
  devtool: config.get('NODE_ENV') ? 'inline-sourcemap' : null,
  entry: './app.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules\/(?!fluxxed_up)/],
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'stylus?paths=node_modules/&resolve url'
        ]
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'app.min.js'
  },
  plugins: config.get('NODE_ENV') === 'development' ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]
}
