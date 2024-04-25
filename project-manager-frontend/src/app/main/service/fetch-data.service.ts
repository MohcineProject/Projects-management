import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../card/project/project';
import { Observable, map, max } from 'rxjs';
@Injectable({
  providedIn: 'root'
})



export class FetchDataService {
  nextId : number = 0;
  projects: Observable<Project[]> = new Observable<Project[]>(observer => {
    observer.next([]);
  });

  constructor(private httpClient : HttpClient) { }

  getProjects(): Observable<Project[]> {
    this.projects = this.httpClient.get<Project[]>('your_api_url')
      .pipe(
        map(projects => {
          // Find the project with the highest ID
          const maxIdProject = projects.reduce((prev, current) => 
            (prev.id > current.id) ? prev : current
          );
          // Store the highest ID
          this.nextId = maxIdProject.id;
          return projects;
        })
      );

    return this.projects;
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


getNextId() : number {

  return ++this.nextId;
}
}
