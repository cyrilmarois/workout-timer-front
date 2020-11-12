import { SoundService } from "../../sound/sound.service";
import { WorkoutService } from "../workout.service";
import { TypeService } from "../../type/type.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-workout-edit",
  templateUrl: "./workout-edit.component.html",
  styleUrls: ["./workout-edit.component.sass"],
})
export class WorkoutEditComponent implements OnInit {
  id: number;
  isNew: boolean;
  workout: any;
  workoutForm = this.formBuilder.group({
    name: ["", Validators.required],
    repetition: ["", Validators.required],
    cycles: this.formBuilder.array([this.addCycleFormGroup()]),
  });
  timing: any = [
    {
      hours: [],
      minutes: [],
      seconds: [],
    },
  ];
  setCount = [];
  types: any;
  sounds: any;
  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService,
    private typeService: TypeService,
    private soundService: SoundService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    var a = 1;

    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.isNew = undefined === params["id"];
      if (!this.isNew) {
        this.workout = this.workoutService.getWorkout(this.id);
      }
    });
    this.getSetCount();
    this.getTypes();
    this.getSounds();
    this.getTiming();
  }

  onSubmit(): void {
    console.warn(
      this.workoutForm.value,
      "stringifyForm",
      this.workoutForm.value
    );
    this.workoutService.createWorkout(JSON.stringify(this.workoutForm.value));
  }

  getSetCount() {
    for (let i = 1; i <= 20; i++) {
      this.setCount.push(i);
    }
  }

  private async getTypes() {
    this.types = await this.typeService.getTypes();
  }

  private async getSounds() {
    this.sounds = await this.soundService.getSounds();
  }

  getTiming() {
    for (let i = 0; i <= 24; i++) {
      let tmpI: string = i.toString();
      if (i < 10) {
        tmpI = "0" + tmpI;
      }
      this.timing[0].hours.push(tmpI);
    }
    for (let i = 0; i <= 60; i++) {
      let tmpI: string = i.toString();
      if (i < 10) {
        tmpI = "0" + tmpI;
      }
      this.timing[0].minutes.push(tmpI);
      this.timing[0].seconds.push(tmpI);
    }
  }

  get cycles(): FormArray {
    return this.workoutForm.get("cycles") as FormArray;
  }

  onAddCycle(): void {
    this.cycles.push(this.addCycleFormGroup());
  }

  onRemoveCycle(index: number): void {
    this.cycles.removeAt(index);
  }

  addCycleFormGroup(): FormGroup {
    return this.formBuilder.group({
      type: ["", Validators.required],
      hour: [""],
      minute: [""],
      second: [""],
      sound: ["", Validators.required],
    });
  }

  cancel(): void {
    // reset form
  }
}
