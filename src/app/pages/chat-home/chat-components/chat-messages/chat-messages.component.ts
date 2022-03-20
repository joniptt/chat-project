import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css'],
})
export class ChatMessagesComponent implements OnInit {
  messages: Message[] = [
    {
      id: 1,
      msg: 'Salve Leo gay Salve Leo gay Salve Leo gay Salve Leo gaySalve Leo gaySalve Leo gaySalve Leo gaySalve Leo gaySalve Leo gaySalve Leo gay',
      type: 1,
    },
    {
      id: 2,
      msg: 'Salve Leo gay Salve Leo gay Salve Leo gay Salve Leo gaySalve Leo gaySalve Leo gaySalve Leo gaySalve Leo gaySalve Leo gaySalve Leo gay',
      type: 2,
    },
    { id: 3, msg: 'Salve Guedes gay', type: 1 },
    { id: 4, msg: 'Salve Felpis gay', type: 2 },
    { id: 5, msg: 'Salve Luqueta gay', type: 1 },
    { id: 6, msg: 'Salve João gay', type: 2 },
    { id: 7, msg: 'Salve sg gay', type: 1 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
