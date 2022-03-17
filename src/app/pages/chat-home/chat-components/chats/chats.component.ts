import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat..service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  


  constructor(private conversas: ChatService) {}

  ngOnInit(): void {
    this.conversas.getAllConversas().subscribe((res) => {
      console.log(res);
    });
  }
}
