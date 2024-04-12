import { Component } from '@angular/core';
import { AuthentificationService } from './Service/authentification-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.scss'
})

export class AuthentificationComponent {

  constructor(private authServ : AuthentificationService, private router : Router) { }

  username: string = '' ; 
  password: string = '' ; 

  login() {
    /* 
    this.authServ.login(this.username, this.password).subscribe((isClient : boolean) => { 
    if (isClient) {

    } 
    else {
    
    }}
    , (error) => { 
      console.log(error.angular.toString());  
    }
    
  )  */ 
    this.router.navigate(['/main']);
  }

  }



