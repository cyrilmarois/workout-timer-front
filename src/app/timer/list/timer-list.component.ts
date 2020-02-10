import { TimerModel } from './../timer.model';
import { TimerService } from './../timer.service';
import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.sass']
})
export class TimerListComponent implements OnInit {

  constructor(private timerService: TimerService) { }

  timers: [];
  timer: any;
  ngOnInit() {
    this.list();
  }

   private async list() {
    const tmpTimer: any = await this.timerService.list({fields: 'timer'});
    this.timers = tmpTimer.data;
  }

  showDetail(timer) {
    this.timer = timer;
  }


}
