const path = require("path");
const webpack = require("webpack");
const FriendlyErrorsWebpackPlugin = require("@soda/friendly-errors-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const notifier = require("node-notifier");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const getIPAdress = () => {
  let interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
};

module.exports = merge(common, {
  stats: "errors-only",
  mode: "development",
  watch: true,
  devtool: "source-map",
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
  entry: path.resolve(__dirname, "../src/test.tsx"),
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "bundle.js",
    // publicPath: "/",
    // chunkFilename: "scripts/[name].[hash:5].js",
    // assetModuleFilename: "images/[name].[hash:5][ext]",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "..", "dist"),
    },
    hot: true,
    port: process.env.PORT || 3000,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  watchOptions: {
    poll: 1000, //监测修改的时间(ms)
    aggregateTimeout: 500, //防止重复按键，500毫秒内算按一次
    ignored: /node_modules/, //不监测
  },

  plugins: [
    // new WebpackBuildNotifierPlugin({
    //   title: process.env.PROJECT_NAME,
    //   logo: resolve(__dirname, "../public/favicon.ico"),
    //   suppressSuccess: true,
    // }),
    // new BundleAnalyzerPlugin({
    // 	// openAnalyzer: false
    // }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `You application is running here http://${getIPAdress()}:${
            process.env.PORT
          }`,
        ],
        notes: ["请关注构建信息"],
      },
      onErrors: function (severity, errors) {
        if (severity !== "error") {
          return;
        }
        const error = errors[0];
        // console.log(error);
        notifier.notify({
          title: "👒 Webpack构建失败",
          message: severity + ": " + error.name,
          subtitle: error.file || "",
          // icon: resolve(__dirname, "../public/favicon.png"),
        });
      },
      clearConsole: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({ exclude: "/node_modules/*" }),
  ],
});
