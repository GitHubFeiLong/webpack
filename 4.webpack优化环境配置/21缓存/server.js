/* 服务代码 */
/* 
    启动服务器指令：
        启动方式 1. npm i nodemon -g （全局安装）
        nodemon server.js

        启动方式 2. node server.js

    访问服务器地址：localhost:3000
*/
const express = require('express');

const app = express();

app.use(express.static('build',{maxAge:1000 * 3600}));

app.listen(3000)
