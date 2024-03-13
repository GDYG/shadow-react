const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'cjs/index.cjs': path.resolve(__dirname, '../src/index.tsx'),
    'umd/index.min': path.resolve(__dirname, '../src/index.tsx'),
    'esm/index.esm': path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'ShadowReactDom',
    umdNamedDefine: true,
    clean: true,
    // libraryTarget: 'module',
    // clean: true,
    // library: {
    //   root: 'ShadowReactDom',
    //   amd: 'ShadowReactDom',
    //   commonjs: 'ShadowReactDom',
    //   type: 'module',
    // },
  },
  // experiments: {
  //   outputModule: true,
  // },
  optimization: {
    minimize: false, // 禁止压缩，避免影响ESM模块的使用
  },
})
