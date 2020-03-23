import { Timer } from '../timer.model';
import { ITimer } from '../timer';
import { TimerApiService } from '../../core/api/timer.api.service/timer.api.service';
import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.sass']
})
export class TimerListComponent implements OnInit {

  constructor(private timerApiService: TimerApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  timers: any = [];
  timer: any;
  ngOnInit() {
    this.list();
  }

   private async list() {
    this.timers = await this.timerApiService.getTimers({fields: 'timer'});
  }

  goToDetail(timer: Timer) {
    // this.router.navigate([timer.id], {relativeTo: this.route});
  }

  async loadTimerData(timer) {
    this.timer = await this.getTimer(timer.id);
    console.warn('timer', this.timer);
  }

  private async getTimer(id: number) {
    const data = await this.timerApiService.getTimer(id, {params: {fields: 'set'}});
    console.log(' async data', data);
  }

  goToCreate() {
    this.router.navigate(['new']);
  }

}
