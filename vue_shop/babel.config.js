/*
 * @Author: your name
 * @Date: 2020-06-28 10:32:27
 * @LastEditTime: 2020-07-06 18:25:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\babel.config.js
 */
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


  ]
}
