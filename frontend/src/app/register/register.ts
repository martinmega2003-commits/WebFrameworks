import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})



export class Register {
  
constructor(private http: HttpClient) {}


onSubmit(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const body = {
    FirstName: (form.elements.namedItem('FirstName') as HTMLInputElement)?.value,
    LastName: (form.elements.namedItem('LastName') as HTMLInputElement)?.value,
    Birthday: (form.elements.namedItem('Birthday') as HTMLInputElement)?.value,
    gender: (form.elements.namedItem('gender') as RadioNodeList)?.value,
    email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
    phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
    password: (form.elements.namedItem('password') as HTMLInputElement)?.value,
  };

  this.http.post('https://webframeworks-3zft.onrender.com/register', body, { withCredentials: true })
    .subscribe({
      next: res => {
        console.log('ok', res);
        window.location.reload();
      },
      error: err => console.error('fail', err)
    });
  }
}
