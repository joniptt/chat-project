import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponentsModule } from './pages/chat-home/chat-components/chat-components.module';
import { ChatHomeComponent } from './pages/chat-home/chat-home.component';
import { ChatHomeModule } from './pages/chat-home/chat-home.module';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AppComponent, ChatHomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatComponentsModule,
    HttpClientModule,
    ChatHomeModule,
    CommonModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
