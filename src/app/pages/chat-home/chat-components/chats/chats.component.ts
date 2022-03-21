import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/pages/login/models/user.model';
import { LoginService } from 'src/app/pages/login/services/login.service';
import { Conversa } from '../../models/conversa.model';
import { Message } from '../../models/message.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  user: User = {};
  lastMsg: Message = {};
  messages: Message[] = [];
  chats: Conversa[] = [];

  constructor(private conversas: ChatService, private login: LoginService) {}

  ngOnInit(): void {
    this.login.usuario.subscribe((res) => {
      this.user = res;
    });
    const msgIndex = this.messages.map((p) => p.type).lastIndexOf(1);
    console.log(msgIndex);
    this.lastMsg = this.messages[msgIndex];
    this.conversas.getAllConversas(this.user.id).subscribe((res) => {
      this.chats = res;
    });
  }
  getConversa() {
    this.conversas.getMessages(this.user.email).subscribe();
  }
}
