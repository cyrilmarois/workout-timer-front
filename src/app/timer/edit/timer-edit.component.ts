import { SoundService } from './../../sound/sound.service';
import { TimerService } from './../timer.service';
import { TypeService } from './../../type/type.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

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
    name: ['', Validators.required],
    repetition: ['', Validators.required],
    cycles: this.formBuilder.array([
      this.addCycleFormGroup()
    ])
  });
  timing: any = [{
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
    var a = 1;

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
    this.getTiming();
  }

  onSubmit(): void {
    console.warn(this.timerForm.value, 'stringifyForm', this.timerForm.value);
    this.timerService.createTimer(JSON.stringify(this.timerForm.value));
  }

  getSetCount() {
    for (let i = 1; i <= 20; i++) {
      this.setCount.push(i);
    }
  }


  private async getTypes() {
    this.types = await this.typeService.getTypes();
  }

  private async  getSounds() {
    this.sounds = await this.soundService.getSounds();
  }

  getTiming() {
    for (let i = 0; i <= 24; i++) {
      let tmpI: string = i.toString();
      if (i < 10) {
        tmpI = '0' + tmpI;
      }
      this.timing[0].hours.push(tmpI);
    }
    for (let i = 0; i <= 60; i++) {
      let tmpI: string = i.toString();
      if (i < 10) {
        tmpI = '0' + tmpI;
      }
      this.timing[0].minutes.push(tmpI);
      this.timing[0].seconds.push(tmpI);
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
      type: ['', Validators.required],
      hour: [''],
      minute: [''],
      second: [''],
      sound: ['', Validators.required]
    });
  }
}
