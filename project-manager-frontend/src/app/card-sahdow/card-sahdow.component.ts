import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-card-sahdow',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './card-sahdow.component.html',
  styleUrl: './card-sahdow.component.scss'
})
export class CardSahdowComponent {

@ViewChild('Modal')  private modalComponent!: ModalComponent;  
  private newProject : boolean = false; 

  addNewProject() {
    this.newProject  = true ; 
  }
 open() {
  this.modalComponent.setState('create') ; 
  this.modalComponent.open();
}

}
