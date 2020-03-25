import { SoundService } from './../../sound/sound.service';
import { TimerService } from './../timer.service';
import { TypeService } from './../../type/type.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timer-edit',
  templateUrl: './timer-edit.component.html',
  styleUrls: ['./timer-edit.component.sass']
})
export class TimerEditComponent implements OnInit {

  id: number;
  isNew: boolean;
  timer: any;
  cycles = 1;
  name = new FormControl('');
  timerForm = new FormGroup({
    timerName: new FormControl('', [Validators.required]),
    setTotal: new FormControl('', [Validators.required]),
    cycle: new FormGroup({
      cycleType: new FormControl('', [Validators.required]),
      cycleHour: new FormControl('', []),
      cycleMinute: new FormControl('', []),
      cycleSecond: new FormControl('', [Validators.required]),
      cycleSound: new FormControl('', [Validators.required])
    })
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
              private soundService: SoundService) { }

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

  updateTimerName() {
    this.name.setValue('hodor');
  }

  submit() {
    console.warn(this.name.value);
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

}
