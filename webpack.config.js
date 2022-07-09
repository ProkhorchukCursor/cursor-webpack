const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const audioSpriteWebpackPlugin = require("audiosprite-webpack-plugin");
const audioSupport = true;

module.exports = {
 mode: "development",
 entry: path.resolve(__dirname, "src/index.js"),
 output: {
  path: path.resolve(__dirname, "dist"),
  filename: "index.js",
 },
 devServer: {
  open: true,
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, "src/index.html"),
  }),
  new audioSpriteWebpackPlugin.Plugin({
   audiosprite: {
    output: "audioSpriteName",
    export: ["mp3", "ogg", "ac3", "m4a", "caf"],
    bitrate: 64,
   },
  }),
 ],
 module: {
  rules: [
   {
    test: /\.(mp3|wav)$/,
    include: /(sounds)/,
    loader: audioSpriteWebpackPlugin.loader,
    options: {
     emptySprite: !audioSupport,
    },
   },
   {
    test: /audioSpriteName\.(mp3|ogg|ac3|m4a|caf)$/,
    exclude: /(sounds)/,
    loader: "file-loader",
   },
   {
    test: /\.(png|jpe?g|svg|mp3|gif)$/i,
    use: [
     {
      loader: "file-loader",
     },
    ],
   },
   {
    test: /\.css$/i,
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

if (!audioSupport) {
 config.module.rules.push({
  test: /howler/,
  loader: audioSpriteWebpackPlugin.emptyHowlerLoader,
 });
}
