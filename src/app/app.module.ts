import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlInterceptor } from './interceptors/url.interceptor';
import { ChatComponentsModule } from './pages/chat-home/chat-components/chat-components.module';
import { ChatHomeComponent } from './pages/chat-home/chat-home.component';
import { ChatHomeModule } from './pages/chat-home/chat-home.module';
import { LoginComponent } from './pages/login/login.component';
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
