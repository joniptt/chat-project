import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Status } from '../models/status';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  public usuario = new Subject<User>();

  login(form: any): Observable<User> {
    return this.http.post<User>('auth/login', form).pipe(
      tap((res) => {
        const user = new User(res.iduser, res.name, res.email, res.telefone);
        this.usuario.next(user);
      })
    );
  }

  cadastro(form: User): Observable<Status> {
    return this.http.post<Status>('cadastrar', form);
  }
}
