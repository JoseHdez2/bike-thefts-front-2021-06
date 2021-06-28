import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './users/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUri + '/users');
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(environment.apiUri + `/users/`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(environment.apiUri + `/users/${id}`);
  }
}
