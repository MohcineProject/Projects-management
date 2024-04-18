import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-card-sahdow',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './card-sahdow.component.html',
  styleUrl: './card-sahdow.component.scss'
})
export class CardSahdowComponent {

  
  private newProject : boolean = false; 

  addNewProject() {
    this.newProject  = true ; 
  }


}
