/*
 * @Author: your name
 * @Date: 2020-06-28 10:32:27
 * @LastEditTime: 2020-09-09 09:15:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\babel.config.js
 */
const proPlugins = []
if (process.env.NODE_ENV === 'production') {
  proPlugins.push('transform-remove-console')
}


module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    ...proPlugins,
    '@babel/plugin-syntax-dynamic-import'
  ]
}
