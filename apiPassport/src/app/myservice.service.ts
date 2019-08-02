import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public url ="http://localhost/8000/";

  entrar(usuario:Array<any>){
    let datos={
      'grant_type':'password',
      'client_id':'2',
      
    }
  }

  constructor() { }
}
