import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AuthentificationComponent } from './authentification/authentification.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent,AuthentificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-manager-frontend';
}
