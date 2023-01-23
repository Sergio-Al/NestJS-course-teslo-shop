import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MessagesWsService } from './messages-ws.service';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messagesWsService: MessagesWsService) {}
  handleConnection(client: Socket) {
    // console.log('client connected', client.id);
    this.messagesWsService.registerClient(client);

    console.log({
      connectedClients: this.messagesWsService.getConnectedClient(),
    });
  }
  handleDisconnect(client: Socket) {
    // console.log('client disconnected', client.id);
    this.messagesWsService.removeClient(client.id);
    console.log({
      connectedClients: this.messagesWsService.getConnectedClient(),
    });
  }
}
