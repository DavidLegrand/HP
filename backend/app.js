const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const fs = require('fs')


const port = process.env.PORT || 4001;
const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: '*',
    }
});

const fileName = 'data/data.json'
io.sockets.on('connection', (socket) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        console.log('sent-first') //just for debugging
        socket.emit('FromAPI', data); //emit to all clients
    });
    const watcher = fs.watch(fileName, (event, fileName) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (data) {
                socket.volatile.emit('FromAPI', data); //emit to all clients
                console.log('sent-change') //just for debugging
            }
        });
    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        watcher.close()
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
