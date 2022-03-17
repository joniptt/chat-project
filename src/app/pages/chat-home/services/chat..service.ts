import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}
  getRemetente(): Observable<any> {
    return this.http.get<any>('chat/remetente');
  }
  getDestina(): Observable<any> {
    return this.http.get('chat/destinatario');
  }
  getConversa(id: number): Observable<any> {
    return this.http.get<any>('chat/conversa' + 1);
  }

  getAllConversas(): Observable<any> {
    return this.http.get('chat/conversas');
  }
}
