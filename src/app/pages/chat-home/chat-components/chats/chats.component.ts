import { Component, OnInit } from '@angular/core';
import { conversa } from '../../models/conversa.model';
import { ChatService } from '../../services/chat..service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  chats: conversa[] = [
    { remet: 'Joaozin' },
    { remet: 'Joaozin' },
    { remet: 'Joaozin' },
    { remet: 'Joaozin' },
    { remet: 'Joaozin' },
    { remet: 'Joaozin' },
    { remet: 'Joaozin' },
  ];

  constructor(private conversas: ChatService) {}

  ngOnInit(): void {
    this.conversas.getAllConversas().subscribe((res) => {
      console.log(res);
    });
  }
}
