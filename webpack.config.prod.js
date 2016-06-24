var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  devtool: 'source-map',
  entry: [
    './app/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      query: { presets: ['es2015', 'react', 'stage-2'] }
    },
    // CSS
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'app'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
