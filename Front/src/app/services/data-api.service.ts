import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { GroupInterface } from '../models/book-interface';

import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  groups: Observable<any>;
  group: Observable<any>;
  public selectedGroup: GroupInterface = {
    id: null,
    name_proyect:'',
    members: '',
    group_leader: '',
    link: '',
    topic: '',
    description_proyect: '',
    scope: '',
    tools: '',
    objetive: '',
    level: '',
    area: '',
    state: ''
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  getAllGroups() {
    const url_api = `http://localhost:8000/api/form`;
    return this.http.get(url_api);
  }
  getNotOffers() {
    const url_api = `http://localhost:8000/api/form`;
    return this.http.get(url_api);
  }
  getGroupById(id: string) {
    const url_api = `http://localhost:8000/api/form`;
    return (this.group = this.http.get(url_api));
  }

  getStudentById(id: string) {
    const url_api = `http://localhost:8000/api/student`;
    return (this.group = this.http.get(url_api));
  }

  getOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=1`;
    return (this.groups = this.http.get(url_api));
  }

  saveGroup(group: GroupInterface) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://127.0.0.1:8000/api/form`;
    return this.http
      .post<GroupInterface>(url_api, group, { headers: this.headers })
      .pipe(map(data => data));
  }

  updateGroup(group) {
    // TODO: obtener token
    // TODO: not null
    
    const groupId = group.groupId;
    const token = this.authService.getToken();
    const url_api = `http://127.0.0.1:8000/api/form`;
    return this.http
      .put<GroupInterface>(url_api, group, { headers: this.headers })
      .pipe(map(data => data));
  }


  deleteGroup(id: string) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    console.log(token);
    const url_api = `http://localhost:3000/api/books/${id}/?access_token=${token}`;
    return this.http
      .delete<GroupInterface>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }
}
