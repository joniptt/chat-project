import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatMessagesComponent } from './chat-components/chat-messages/chat-messages.component';
import { OpenChatComponent } from './chat-components/open-chat/open-chat.component';
import { ChatHomeComponent } from './chat-home.component';

const chat: Routes = [
  {
    path: '',
    component: ChatHomeComponent,
    children: [
      { path: '', component: ChatMessagesComponent },
      { path: 'chose', component: OpenChatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(chat)],
  exports: [RouterModule],
})
export class ChatHomeRoutingModule {}
