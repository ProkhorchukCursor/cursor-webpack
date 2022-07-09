const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 mode: "development",
 entry: path.resolve(__dirname, "src/index.js"),
 output: {
  path: path.resolve(__dirname, "dist"),
  filename: "bundle.js",
 },
 devServer: {
  open: true,
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, "src/index.html"),
  }),
 ],
 module: {
  rules: [
   {
    test: /\.(png|jpe?g|svg|gif)$/i,
    use: [
     {
      loader: "file-loader",
     },
    ],
   },
   {
    test: /\.scss$/i,
    use: ["style-loader", "css-loader"],
   },
   {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
     loader: "babel-loader",
     options: {
      presets: ["@babel/preset-env"],
     },
    },
   },
  ],
 },
};
