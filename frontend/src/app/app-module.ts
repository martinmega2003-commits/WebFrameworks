import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';



import { App } from './app';
import { Register } from './register/register';
import { AppRoutingModule } from '../app-routing';
import { Login } from './login/login';
import { Data } from './data/data';


@NgModule({
  declarations: [
    App,
    Register,
    Login,
    Data
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
