import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlInterceptor } from './interceptors/url.interceptor';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { ChatComponentsModule } from './pages/chat-home/chat-components/chat-components.module';
import { ChatHomeComponent } from './pages/chat-home/chat-home.component';
import { ChatHomeModule } from './pages/chat-home/chat-home.module';
import { LoginModule } from './pages/login/login.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [AppComponent, ChatHomeComponent],
  imports: [
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ChatComponentsModule,
    HttpClientModule,
    ChatHomeModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
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
