const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'src'),
    host: '0.0.0.0',
    port: 4200
  },
  optimization: {
    minimize: false
  }
};
