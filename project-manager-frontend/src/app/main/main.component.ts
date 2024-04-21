import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardSahdowComponent } from '../card-sahdow/card-sahdow.component';
import { FetchDataService } from './service/fetch-data.service';
import { Project } from '../card/project/project';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, CardSahdowComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private fetchDataService: FetchDataService) { }

  projects: Project[] = [] ; 

/*   ngOnInit(): void {
    this.projects =   this.fetchDataService.getProjects()    
  } */
  

  
}
