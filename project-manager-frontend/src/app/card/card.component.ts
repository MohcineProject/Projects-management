import { Component, Input, ViewChild } from '@angular/core';
import { Project } from './project/project';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { ModalSuccessComponent } from '../modal-success/modal-success.component';
import { FetchDataService } from '../main/service/fetch-data.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ModalComponent, ModalSuccessComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

@Input() project! : Project ; 
@ViewChild('Modal') modalComponent! : ModalComponent ; 
@ViewChild('ModalSuccess') modalSuccessComponent! : ModalSuccessComponent ; 


constructor (private fetchDataService: FetchDataService) {}


colorMap : {[key:string] : string} = {
  "Done" : "#098000" , 
  'In Progress' : "#eaff04fc" ,
 'Suspended' : "#c00b01" 

}

getColorOfState(state: string): string { return this.colorMap[state]; } 

deleteProject() {
this.modalSuccessComponent.open() ; 
}

openModal() {
this.modalComponent.setState('update') ; 
this.modalComponent.open();
}

}
 