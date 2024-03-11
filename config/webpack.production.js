const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(process.cwd(), 'dist/lib'),
    filename: 'index.js',
    // publicPath: '/',
    // chunkFilename: "scripts/[name].[hash:5].js",
    // assetModuleFilename: "images/[name].[hash:5][ext]",
  },
})
