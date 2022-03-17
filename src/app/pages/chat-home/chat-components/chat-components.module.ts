import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { OpenChatComponent } from './open-chat/open-chat.component';

@NgModule({
  declarations: [ChatMessagesComponent, OpenChatComponent],
  imports: [CommonModule],
  exports: [ChatMessagesComponent],
})
export class ChatComponentsModule {}
