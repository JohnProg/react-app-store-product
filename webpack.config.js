var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/app-client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      query: { presets: ['es2015', 'react', 'stage-2', 'react-hmre'] }
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
