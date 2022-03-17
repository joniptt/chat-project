import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatMessagesComponent } from './chat-messages/chat-messages/chat-messages.component';

@NgModule({
  declarations: [ChatMessagesComponent],
  imports: [CommonModule],
  exports: [ChatMessagesComponent],
})
export class ComponentsModule {}
