import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../_model/person';
import { User } from '../_model/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // baseUrl = 'http://localhost:3000/';
  baseUrl = 'https://iti-amzon-backend.herokuapp.com/';

  // userLoggedIn = new EventEmitter<User>();

  constructor(private httpClient: HttpClient) {}

  register(user: User) {
    return this.httpClient.post(`${this.baseUrl}user/register`, user);
  }

  login(user: User) {
    return this.httpClient.post(`${this.baseUrl}user/login`, user);
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
