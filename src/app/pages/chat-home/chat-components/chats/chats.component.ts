import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/pages/login/models/user.model';
import { AuthService } from 'src/app/pages/login/services/auth.service';
import { Message } from '../../models/message.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  img =
    'https://img.favpng.com/8/14/0/computer-icons-user-profile-material-design-png-favpng-fhWEA7BrBaUmKQZ5DYmuv2qDm.jpg';
  user: User = new User(1, 'jdospassos8@gmail.com', 'joao', '48999400353');
  lastMsg: Message = {};
  messages: Message[] = [];
  chats: User[] = [];

  constructor(private conversas: ChatService, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.usuario.subscribe((res) => {
      this.user = res;
    });
    const msgIndex = this.messages.map((p) => p.type).lastIndexOf(1);
    console.log(msgIndex);
    this.lastMsg = this.messages[msgIndex];
    this.conversas.getAllConversas().subscribe((res) => {
      this.chats = res;
    });
  }
  getConversa() {
    this.conversas.getMessages(this.user.iduser).subscribe();
  }
}
