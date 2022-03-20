import { Component, OnInit } from '@angular/core';
import { conversa } from '../../models/conversa.model';
import { Message } from '../../models/message.model';
import { ChatService } from '../../services/chat..service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  lastMsg: Message = {};
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
  chats: conversa[] = [
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
    {
      img: 'https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png',
      remet: 'Joaozin',
    },
  ];

  constructor(private conversas: ChatService) {}

  ngOnInit(): void {
    this.messages.slice();
    const msgIndex = this.messages.map((p) => p.type).lastIndexOf(1);
    console.log(msgIndex);
    this.lastMsg = this.messages[msgIndex];
    this.conversas.getAllConversas().subscribe((res) => {
      console.log(res);
    });
  }
}
