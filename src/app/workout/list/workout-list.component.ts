import { Workout } from "./../workout.model";
import { WorkoutService } from "./../workout.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-workout-list",
  templateUrl: "./workout-list.component.html",
  styleUrls: ["./workout-list.component.sass"],
})
export class WorkoutListComponent implements OnInit {
  constructor(
    private workoutService: WorkoutService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  workouts: any = [];
  workout: any;
  async ngOnInit() {
    this.list();
  }

  private async list() {
    this.workouts = await this.workoutService.getWorkouts({
      fields: "workout",
    });
  }

  goToDetail(workout: Workout) {
    this.router.navigate([workout.getId()], { relativeTo: this.route });
  }

  async loadWorkoutData(workout) {
    this.workout = await this.getWorkout(workout.id);
    console.warn("workout", this.workout);
  }

  private async getWorkout(id: number) {
    const data = await this.workoutService.getWorkout(id, {
      params: { fields: "set" },
    });
    console.log(" async data", data);
  }

  goToCreate() {
    this.router.navigate(["new"]);
  }
}
