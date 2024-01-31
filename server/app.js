const {WebSocketServer, WebSocket} = require('ws')
const {format} = require("util");

// const path = 'ws://speers-carter.com/apps/dubchess/client';
const port = 8080;

const wss = new WebSocketServer({/*path: path,*/ port: port});

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(format('%s', data));
            }
        });
    });

    ws.send('something');
});