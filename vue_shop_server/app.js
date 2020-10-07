/*
 * @Author: your name
 * @Date: 2020-09-09 09:30:51
 * @LastEditTime: 2020-09-09 15:28:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop_server\app.js
 */
const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression())
app.use(express.static('./dist'))

app.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})