import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserInterface } from '../models/user-interface';
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htttp: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registerUser(name: string, email: string, password: string) {
    const url_api = "http://localhost:8000/register";
    return this.htttp
      .post<UserInterface>(
        url_api,
        {
          name: name,
          email: email,
          password: password
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  loginuser(email: string, password: string): Observable<any> {
    const url_api = "http://localhost:8000/login";
    return this.htttp
      .post<UserInterface>(
        url_api,
        { email, password },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = "http://localhost:8000/logout";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  }
}
