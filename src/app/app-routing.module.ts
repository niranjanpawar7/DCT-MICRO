import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { RegistrationComponent } from './registration/registration.component';  
import { HomeComponent } from './home/home.component';  


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'registration', component: RegistrationComponent},
  { path : 'home', component : HomeComponent},
  { path: '**', component: PageNotFoundComponent },
 
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
