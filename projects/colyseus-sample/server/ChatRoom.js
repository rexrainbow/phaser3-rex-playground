import { Room } from 'colyseus';

class ChatRoom extends Room {
    onInit(options) {
        console.log('BasicRoom created!', options);
    }

    onJoin(client) {
        this.broadcast(`${client.sessionId} joined.`);
    }

    onLeave(client) {
        this.broadcast(`${client.sessionId} left.`);
    }

    onMessage(client, data) {
        console.log('BasicRoom received message from', client.sessionId, ':', data);
        this.broadcast(`(${client.sessionId}) ${data.message}`);
    }

    onDispose() {
        console.log('Dispose BasicRoom');
    }
}
export default ChatRoom;