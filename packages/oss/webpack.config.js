const HtmlPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
module.exports = {
  output: { path: path.resolve(__dirname, "build"), filename: "bundle.js", publicPath: "/" }, //folder build
  resolve: {
    alias: {
      "@oss": path.resolve(__dirname, "src"),
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
      { test: /\.(png|jpe?g|svg|gif|ico)$/i, use: { loader: "file-loader" } },
      // { test: /\.s[ac]ss$/i, use: [MiniCSSExtractPlugin.loader, "sass-loader", "css-loader"] },
      // {
      //   test: /\.s[ac]ss$/i,
      //   include: /node_modules/,
      //   use: [
      //     MiniCSSExtractPlugin.loader,
      //     // Creates `style` nodes from JS strings
      //     // "style-loader",
      //     // Translates CSS into CommonJS
      //     "css-loader",
      //     // Compiles Sass to CSS
      //     "sass-loader",
      //   ],
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          // { loader: MiniCSSExtractPlugin.loader },
          {
            loader: "css-loader",
          },

          // {
          //   loader: "postcss-loader",
          //   options: {
          //     plugins: [autoprefixer({ browsers: ["> 1%"] })],
          //   },
          // },
          { loader: "resolve-url-loader" },

          { loader: "sass-loader" },
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
    // new MiniCSSExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],

  devServer: {
    historyApiFallback: true,
    port: 4000,
    overlay: true,
    hot: true,
  },
};
