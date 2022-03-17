import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatMessagesComponent } from './chat-components/chat-messages/chat-messages.component';
import { OpenChatComponent } from './chat-components/open-chat/open-chat.component';
import { ChatHomeComponent } from './chat-home.component';

const chat: Routes = [
  {
    path: 'home',
    component: ChatHomeComponent,
    children: [
      { path: 'openchat', component: OpenChatComponent },
      { path: 'messages', component: ChatMessagesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(chat)],
  exports: [RouterModule],
})
export class ChatHomeRoutingModule {}
