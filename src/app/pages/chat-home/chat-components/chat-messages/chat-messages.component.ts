import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css'],
})
export class ChatMessagesComponent implements OnInit {
  messages: Message[] = [
    {
      id: 1,
      msg: 'Salve',
      type: 1,
    },
    {
      id: 2,
      msg: 'Diga la omi',
      type: 2,
    },
    { id: 3, msg: 'Churrasquinho dos guri', type: 1 },
    { id: 4, msg: 'Bah né o meu vamo', type: 2 },
    { id: 5, msg: 'Um pack de polar dos gurizes', type: 1 },
    { id: 6, msg: 'Vamo Grêmio', type: 2 },
    { id: 7, msg: 'É os guri, não tem como né', type: 1 },
    { id: 8, msg: 'Comer um shuripã?', type: 1 },
    { id: 9, msg: 'Só por dale né meuzinho', type: 2 },
    { id: 10, msg: 'Tens uma bombacha pra me emprestar omi?', type: 1 },
    { id: 11, msg: 'Tenho sim meu, só tu levar teu chimas', type: 2 },
    { id: 12, msg: 'Mas bah omi, tem que chupar até roncar', type: 1 },
    { id: 13, msg: 'Ahã', type: 2 },
  ];
  constructor(private conversas: ChatService) {}

  ngOnInit(): void {
    this.conversas.messages.subscribe((res) => {
      this.messages = res;
    });
  }
}
