import { Component, Input } from '@angular/core';
import { Project } from './project/project';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() project! : Project ; 

@Input() addCard! : boolean ; 

}
