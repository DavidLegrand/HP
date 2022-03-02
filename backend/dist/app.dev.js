"use strict";

var express = require("express");

var http = require("http");

var socketIo = require("socket.io");

var fs = require('fs');

var port = process.env.PORT || 4001;
var app = express();
var server = http.createServer(app);
var io = socketIo(server, {
  cors: {
    origin: '*'
  }
});
var fileName = 'data.json';
io.sockets.on('connection', function (socket) {
  fs.readFile(fileName, 'utf-8', function (err, data) {
    console.log('sent-first'); //just for debugging

    socket.emit('FromAPI', data); //emit to all clients
  });
  var watcher = fs.watch(fileName, function (event, fileName) {
    fs.readFile(fileName, 'utf-8', function (err, data) {
      if (data) {
        socket["volatile"].emit('FromAPI', data); //emit to all clients

        console.log('sent-change'); //just for debugging
      }
    });
  });
  socket.on("disconnect", function () {
    console.log("Client disconnected");
    watcher.close();
  });
});
server.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});