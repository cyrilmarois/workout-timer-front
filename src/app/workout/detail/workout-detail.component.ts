import { Workout } from "../workout.model";
import { WorkoutService } from "../workout.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-workout-detail",
  templateUrl: "./workout-detail.component.html",
  styleUrls: ["./workout-detail.component.sass"],
})
export class WorkoutDetailComponent implements OnInit {
  id: number;
  workout: Workout;

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log("id", params["id"]);
      this.id = +params["id"];
      this.getWorkout(this.id);
      console.log("workout", this.workout);
    });
  }

  async getWorkout(id: number) {
    this.workout = await this.workoutService.getWorkout(this.id, {
      params: { fields: "set" },
    });
    console.log(" async workout", this.workout);
  }
}
