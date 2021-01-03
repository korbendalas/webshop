const HtmlPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
module.exports = {
  output: { path: path.resolve(__dirname, "build"), filename: "bundle.js" }, //folder build
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_mdules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      { test: /\.(png|jpe?g|svg|gif|ico)$/i, use: ["file-loader?name=[name].[ext]"] },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          // MiniCSSExtractPlugin.loader,
          "css-loader",
          // { loader: "resolve-url-loader" },
          { loader: "sass-loader" },

          {
            loader: "postcss-loader",
            //   options: {
            //     plugins: [autoprefixer({ browsers: ["> 1%"] })],
            //   },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    }),

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    // new MiniCSSExtractPlugin(),
  ],

  devServer: {
    historyApiFallback: true,
    port: 3000,
    overlay: true,
  },
};
