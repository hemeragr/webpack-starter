const path = require('path');

module.exports = {
      output: {
        path: path.resolve(__dirname, "public"),
      },
      entry: {
        index: "./src/index.js",
        detail: "./src/detail.js",
      },
      devServer: {
        static: './',
        port: 9001,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
      devtool: "inline-source-map",    
};