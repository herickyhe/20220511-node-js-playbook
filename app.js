// 第一個區塊 內建模組
const path = require('path');
const http = require('http');

// 第二個區塊 第三方模組(套件)

// 第三個區塊 自建模組
const hello = require('./hello');

////////////////////////////////////////////////////////////////

hello.sayHello();

console.log(hello.title);