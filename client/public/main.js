const socket = new WebSocket('ws://localhost:8080');
let serverStr = '';
socket.onopen = () => {
    console.log('connection established')
}
socket.onmessage = (data) => {
    serverStr = serverStr.concat(data.data, '\n');
    document.querySelector('#from-server').value = serverStr;
    console.log('Message from server ', data.data)
};

function onClick() {
    console.log('sending data...')
    socket.send(document.querySelector('#field').value);
}

