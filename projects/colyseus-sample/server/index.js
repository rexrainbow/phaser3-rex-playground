import express from 'express';
import { createServer } from 'http';
import { Server } from 'colyseus';
import { monitor } from '@colyseus/monitor';
import ChatRoom from './ChatRoom.js';

const port = Number(process.env.PORT || 2567);
const app = express();

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({
    server: createServer(app)
});

// Register ChatRoom as "chat"
gameServer.register("chat", ChatRoom);

// Register monitor route AFTER registering your room handlers
app.use('/colyseus', monitor(gameServer));

gameServer.listen(port);

console.log(`Listening on http://localhost:${ port }`);