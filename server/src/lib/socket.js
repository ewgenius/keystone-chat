import SocketIO from 'socket.io';
import keystone from 'keystone';

export default class SocketService {
  constructor() {
    this.io = SocketIO(keystone.httpServer);
  }
}
