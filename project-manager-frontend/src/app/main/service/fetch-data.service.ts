import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../card/project/project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private projects! : Project[] ; 
  constructor(private httpClient : HttpClient) { }



getProjects() :Observable<Project[]> {
    return this.httpClient.get<Project[]>('')
  }


addProject(project : Project) : Observable<any> { 

return this.httpClient.post<Project>('', project ) ; 

}

updateProject(project : Project) : Observable<any> { 
  return this.httpClient.put<Project>('', project) ; 
}

deleteProject(projectId : number) : Observable<any> { 
  return this.httpClient.delete<Project>('') ; 
}

}
