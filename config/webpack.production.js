const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, '../src/index.tsx'),
    'index.min': path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    path: path.resolve(process.cwd(), 'dist/umd'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'shadow-react-dom',
    umdNamedDefine: true,
  },
})
