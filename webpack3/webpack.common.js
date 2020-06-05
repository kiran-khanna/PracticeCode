const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      main: "./src/index.js",
      vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })
  ],
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ["style-loader" , "css-loader" , "sass-loader"]
          },
          {
            test: /\.html$/,
            use: ["html-loader"]
          },
          {
            test:/\.(svg|png|jpg|gif)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
                outputPath: "imgs"
              }
            }
          }
        ]
    }    
};