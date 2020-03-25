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
  name = new FormControl('');
  timerForm = new FormGroup({
    timerName: new FormControl('', [Validators.required]),
    setTotal: new FormControl('', [Validators.required]),
    cycleType: new FormControl('', [Validators.required]),
    cycleHour: new FormControl('', []),
    cycleMinute: new FormControl('', []),
    cycleSecond: new FormControl('', [Validators.required]),
    cycleSound: new FormControl('', [Validators.required])
  });
  typeIsDefined = false;
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
              private typeService: TypeService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.isNew = undefined === params['id'];
      if (!this.isNew) {
        this.timer = this.timerService.getTimer(this.id);
      }
    });
    this.getSetTotal();
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
    console.warn(this.timerForm.value);
  }

  getSetTotal() {
    for (let i = 1; i <= 10; i++) {
      this.setCount.push(i);
    }
  }


  private async getTypes() {
    this.types = await this.typeService.getTypes();
  }

  getSounds() {
    this.sounds = [
      { id: 1, value: 'Horn' },
      { id: 2, value: 'Alarm' },
      { id: 3, value: 'Sonar' }
    ];
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

  onCycleTypeChange(data) {
    this.typeIsDefined = true;
  }

}
