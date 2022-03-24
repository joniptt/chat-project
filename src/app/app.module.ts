import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlInterceptor } from './interceptors/url.interceptor';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { ChatComponentsModule } from './pages/chat-home/chat-components/chat-components.module';
import { ChatHomeComponent } from './pages/chat-home/chat-home.component';
import { ChatHomeModule } from './pages/chat-home/chat-home.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [AppComponent, ChatHomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatComponentsModule,
    HttpClientModule,
    ChatHomeModule,
    CommonModule,
    NgbModule,
    FormsModule,
    LoginModule,
    CadastroModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
