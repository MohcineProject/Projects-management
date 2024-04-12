import { Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MainComponent } from './main/main.component';
export const routes: Routes = [
{ path: '', redirectTo: '/authentification', pathMatch: 'full' }, // Default route redirects to login
{ path: 'authentification', component: AuthentificationComponent },
{ path: 'main', component: MainComponent },
];
