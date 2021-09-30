// index.js

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello express');
});

var port = 3000;
app.listen(port, function () {
    console.log(Date() + '\nhttp://localhost:' + port + ' 에서 서버 실행 중');
});