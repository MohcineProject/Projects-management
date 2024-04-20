import { Component, Input } from '@angular/core';
import { Project } from './project/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() project! : Project ; 

@Input() addCard! : boolean ; 

colorMap : {[key:string] : string} = {
  "Done" : "#098000" , 
  'In Progress' : "#eaff04fc" ,
 'Suspended' : "#c00b01" 

}

getColorOfState(state: string): string { return this.colorMap[state]; } 

}
