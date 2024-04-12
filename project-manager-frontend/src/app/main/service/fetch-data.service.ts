import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../card/project/project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  
  constructor(private httpClient : HttpClient) { }

  getProjects() :Observable<Project[]> {
    return this.httpClient.get<Project[]>('');
  }

  
}
