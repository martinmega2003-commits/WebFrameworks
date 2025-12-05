import { Component, OnInit } from '@angular/core';
import { WorkoutData } from '../workout-data';

export class Workout {
  name!: string;
  rating!: number;   // možná spíš number, ale jak chceš
  duration!: number;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.html',
  styleUrls: ['./data.css'],
  providers: [WorkoutData],
  standalone: false,
})
export class Data implements OnInit {

  workouts: Workout[] = [];

  constructor(private workoutData: WorkoutData) { }

  private getWorkoutData(): void {
    this.workoutData
      .getWorkoutData()
      .then(foundWorkouts => {
        this.workouts = foundWorkouts;
      });
  }

  ngOnInit(): void {
    this.getWorkoutData();
  }
}
