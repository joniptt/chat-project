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

  getMessages(id: number): Observable<Message[]> {
    return this.http.get<Message[]>(`chat/conversa/${id}`).pipe(
      tap((res) => {
        this.messages.next(res);
      })
    );
  }

  getAllConversas(): Observable<any> {
    return this.http.get(`conversas/${1}`);
  }

  addConversa(conv: { rem: string; dest: string }): Observable<any> {
    return this.http.post('chat/conversa/add', conv);
  }
}
