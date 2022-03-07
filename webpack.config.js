const path = require('path');

module.exports = {
    entry: {
      index: './src/index.js',
    },
    devServer: {
        static: path.join(__dirname, '/'),
        compress: true,
        port: 9000,
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
};