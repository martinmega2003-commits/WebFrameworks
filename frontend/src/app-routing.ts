import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register } from './app/register/register';
import { Login } from './app/login/login';
import { Data } from './app/data/data';

const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'data', component: Data },

  // výchozí stránka
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
