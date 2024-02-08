import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { store } from 'src/store/store';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  // emit event
  sendMessages(args: any) {
    this.socket.emit('private message', args);
  }

  // listen event
  onFetchMessages() {
    return this.socket.fromEvent('private message-' + store.state.user.id);
  }
}
