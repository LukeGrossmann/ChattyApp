const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });



wss.broadcastJSON = function (data) {
  const dataStr = JSON.stringify(data);
  this.clients.forEach(client => {
    // if (client.state !== 'OPENED') {
      client.send(dataStr);
    // }
  });
}
function activeUsers() {
  var activeUserData = {
    type:'activeUsers',
    value: activeConnections
  }
  return activeUserData;
}
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

var activeConnections = 0;

var connected = 'Active Users'
wss.on('connection', (ws) => {
  console.log('Client connected');
    activeConnections++;
  wss.broadcastJSON(activeUsers());

  console.log('active users', activeConnections);
  ws.on('message', function incoming(message) {
    const uuid= uuidv4();

    try {
      var parsed = JSON.parse(message);

    }
    catch (e) {
      console.error('Received invalid json.');
      return;
    }

    const data = parsed;
    data.id = uuid;


    wss.broadcastJSON(data);
  });


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    activeConnections--;
    wss.broadcastJSON(activeUsers());
    console.log('Client disconnected');

  });
});