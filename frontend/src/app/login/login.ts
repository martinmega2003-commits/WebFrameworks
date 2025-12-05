import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

constructor(private http: HttpClient) {}
onLogin(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const body = new URLSearchParams({
    email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
    password: (form.elements.namedItem('password') as HTMLInputElement)?.value,
  });

  this.http.post('/login', body.toString(), {
    withCredentials: true,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).subscribe({
    next: res => console.log('login ok', res),
    error: err => console.error('login fail', err)
  });
}

}

