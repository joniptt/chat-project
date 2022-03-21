import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}

  public usuario = new Subject<User>();

  login(form: any): Observable<User> {
    return this.http.post<User>('auth/login', form).pipe(
      tap((res) => {
        const user = new User(res.id, res.email, res.name);
        this.usuario.next(user);
      })
    );
  }
}
