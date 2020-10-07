/*
 * @Author: your name
 * @Date: 2020-06-28 16:29:44
 * @LastEditTime: 2020-09-09 10:03:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\vue.config.js
 */

module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    chainWebpack: config => {
        config.when(process.env.NODE_ENV === 'production', config => {
            config.entry('app').clear().add('./src/main-prod.js')

            // config.set('externals', {
            //     vue: 'vue',
            //     'vue-router': 'VueRouter',
            //     axios: 'axios',
            //     lodash: '_',
            //     echarts: 'echarts',
            //     nprogress: 'NProgress',
            //     'vue-quill-editor': 'VueQuillEditor'
            // })

            config.plugin('html').tap(args => {
                args[0].isProd = true;
                return args;
            })
        })

        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')

            config.plugin('html').tap(args => {
                args[0].isProd = false;
                return args;
            })
        })


    }
}