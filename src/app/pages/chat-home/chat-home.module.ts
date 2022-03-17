import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatComponentsModule } from './chat-components/chat-components.module';
import { ChatsComponent } from './chat-components/chats/chats.component';
import { ChatHomeRoutingModule } from './chat-home-routing.module';

@NgModule({
  declarations: [ChatsComponent],
  imports: [ChatComponentsModule, CommonModule, ChatHomeRoutingModule],
  exports: [ChatComponentsModule, ChatsComponent],
})
export class ChatHomeModule {}
