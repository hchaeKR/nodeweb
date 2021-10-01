//name: index.js

var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//     res.send('hello express');
// });

// app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/hello', function (req, res) {
    res.render('hello', {name:req.query.nameQuery});
});

app.get('/hello/:nameParam', function (req, res) {
    res.render('hello', {name:req.params.nameParam});
});

/**
 * req.query - GET 방식 query string
 * req.params - GET 방식 URI
 * req.body - POST 방식 key-value property ex) req.body.key
 */

var port = 3000;
app.listen(port, function () {
    console.log(Date() + '\nhttp://localhost:' + port + ' 에서 서버 실행 중');
});