import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public messages = new Subject<Message[]>();

  constructor(private http: HttpClient) {}

  getMessages(rem: string): Observable<Message[]> {
    return this.http.get<Message[]>(`chat/conversa/${rem}`).pipe(
      tap((res) => {
        this.messages.next(res);
      })
    );
  }

  getAllConversas(id: number): Observable<any> {
    return this.http.get(`chat/conversas/${id}`);
  }

  addConversa(conv: { rem: string; dest: string }): Observable<any> {
    return this.http.post('chat/conversa/add', conv);
  }
}
