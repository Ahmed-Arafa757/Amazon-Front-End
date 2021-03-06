import { User } from './../_model/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  /* baseUrl = 'http://localhost:3000/'; */
  baseUrl = 'https://iti-amzon-backend.herokuapp.com/';

  getAllUsers() {
    return this.httpClient.get(`${this.baseUrl}users`);
  }

  getUserById(id: string) {
    return this.httpClient.get(`${this.baseUrl}user/id/${id}`);
  }

  getUserByEmail(email: string) {
    return this.httpClient.get(this.baseUrl + 'user/email/' + email);
  }

  resetPassword(id: string) {
    console.log(this.baseUrl + 'resetpassword/sendEmail/' + id);
    return this.httpClient.get(this.baseUrl + 'resetpassword/sendEmail/' + id);
  }

  saveNewPassword(token: string, id: string, password, repeatedPassword) {
    var body = {
      token,
      id,
      date: Date.now(),
      password,
      repeatedPassword,
    };
    return this.httpClient.put(
      this.baseUrl + 'resetpassword/changePassword/',
      body,
      { responseType: 'json' }
    );
  }

  addUser(user: User) {
    const newUser = {
      userName: user.userName,
      email: user.email,
      password: user.password,
      repeatedPassword: user.repeatedPassword,
    };

    return this.httpClient.post(`${this.baseUrl}user/register`, newUser);
  }

  updateUser(user: User) {
    const updatedUser = {
      _id: user._id,
      userName: user.userName,
      phone: user.phone,
      email: user.email,
      password: user.password,
      repeatedPassword: user.repeatedPassword,
    };
    return this.httpClient.put(`${this.baseUrl}user`, updatedUser);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${this.baseUrl}user/${id}`);
  }
  signInWithGoogle(socialUser) {
    console.log(socialUser);
    return this.httpClient.post(`${this.baseUrl}user/login/google`, socialUser);
  }
  signInWithFB(socialUser) {
    console.log(socialUser);
    return this.httpClient.post(
      `${this.baseUrl}user/login/facebook`,
      socialUser
    );
  }
}
