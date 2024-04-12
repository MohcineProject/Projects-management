import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService{

  constructor(private httpClient : HttpClient) { }

  login(username : string, password : string) {
    // return this.httpClient.post<boolean>("/api/login" , {username,password}) ; 
    return true;
  }

}
