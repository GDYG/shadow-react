module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: ['html'],
      // mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
    },
  },
}
