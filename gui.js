var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client')));


app.get('/', function(req, res) {
    console.log('got root');
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

io.on('connection', function() {
    console.log('connection has got');
});

server.listen(port);
