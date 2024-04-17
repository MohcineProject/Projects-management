import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardSahdowComponent } from '../card-sahdow/card-sahdow.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, CardSahdowComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {



  
}
