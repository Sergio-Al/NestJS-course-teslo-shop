import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface Connectedclient {
  [id: string]: Socket;
}

@Injectable()
export class MessagesWsService {
  private connectedClients: Connectedclient = {};

  registerClient(client: Socket) {
    this.connectedClients[client.id] = client;
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClient(): number {
    return Object.keys(this.connectedClients).length;
  }
}
