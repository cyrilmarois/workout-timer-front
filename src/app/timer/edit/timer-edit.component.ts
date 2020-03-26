import { SoundService } from './../../sound/sound.service';
import { TimerService } from './../timer.service';
import { TypeService } from './../../type/type.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-timer-edit',
  templateUrl: './timer-edit.component.html',
  styleUrls: ['./timer-edit.component.sass']
})
export class TimerEditComponent implements OnInit {

  id: number;
  isNew: boolean;
  timer: any;
  timerForm = this.formBuilder.group({
    timerName: ['', Validators.required],
    setTotal: ['', Validators.required],
    // cycle: this.formBuilder.group({
    //   cycleType: ['', Validators.required],
    //   cycleHour: [''],
    //   cycleMinute: [''],
    //   cycleSecond: ['', Validators.required],
    //   cycleSound: ['', Validators.required]
    // }),
    cycles: this.formBuilder.array([
      this.addCycleFormGroup()
    ])
  });
  duration: any = [{
    hours: [],
    minutes: [],
    seconds: [],
  }];
  setCount = [];
  types: any;
  sounds: any;
  constructor(private route: ActivatedRoute,
              private timerService: TimerService,
              private typeService: TypeService,
              private soundService: SoundService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.isNew = undefined === params['id'];
      if (!this.isNew) {
        this.timer = this.timerService.getTimer(this.id);
      }
    });
    this.getSetCount();
    this.getTypes();
    this.getSounds();
    this.getDuration();
  }

  onSubmit() {
    console.warn(this.timerForm.value, 'stringifyForm', this.timerForm.value);
    JSON.stringify(this.timerForm.value);
  }

  getSetCount() {
    for (let i = 1; i <= 10; i++) {
      this.setCount.push(i);
    }
  }


  private async getTypes() {
    this.types = await this.typeService.getTypes();
  }

  private async  getSounds() {
    this.sounds = await this.soundService.getSounds();
  }

  getDuration() {
    for (let i = 0; i <= 24; i++) {
      let tmpI: string = i.toString();
      if (i < 10) {
        tmpI = '0' + tmpI;
      }
      this.duration[0].hours.push(tmpI);
    }
    for (let i = 0; i <= 60; i++) {
      let tmpI: string = i.toString();
      if (i < 10) {
        tmpI = '0' + tmpI;
      }
      this.duration[0].minutes.push(tmpI);
      this.duration[0].seconds.push(tmpI);
    }
  }

  get cycles(): FormArray {
    return this.timerForm.get('cycles') as FormArray;
  }

  onAddCycle(): void {
    this.cycles.push(this.addCycleFormGroup());
  }

  onRemoveCycle(index: number): void {
    this.cycles.removeAt(index);
  }

  addCycleFormGroup(): FormGroup {
    return this.formBuilder.group({
      cycleType: ['', Validators.required],
      cycleHour: [''],
      cycleMinute: [''],
      cycleSecond: ['', Validators.required],
      cycleSound: ['', Validators.required]
    });
  }
}
