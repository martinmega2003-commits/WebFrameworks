import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Workout } from './data/data';



@Injectable({
  providedIn: 'root',

})
export class WorkoutData {
  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public async getWorkoutData(): Promise<Workout[]> {
    const url = `${this.apiBaseUrl}/locations`;

    try {
      return await firstValueFrom(this.http.get<Workout[]>(url));
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: any): Promise<never> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }


}
