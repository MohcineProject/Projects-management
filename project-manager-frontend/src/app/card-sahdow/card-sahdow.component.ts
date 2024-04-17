import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-card-sahdow',
  standalone: true,
  imports: [],
  templateUrl: './card-sahdow.component.html',
  styleUrl: './card-sahdow.component.scss'
})
export class CardSahdowComponent {

  
  private newProject : boolean = false; 

  addNewProject() {
    this.newProject  = true ; 
  }


}
