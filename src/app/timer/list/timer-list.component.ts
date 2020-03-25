import { TimerService } from './../timer.service';
import { Timer } from '../timer.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.sass']
})
export class TimerListComponent implements OnInit {

  constructor(private timerService: TimerService,
              private router: Router,
              private route: ActivatedRoute) { }

  timers: any = [];
  timer: any;
  async ngOnInit() {
    this.list();
  }

   private async list() {
    this.timers = await this.timerService.getTimers({fields: 'timer'});
  }

  goToDetail(timer: Timer) {
    this.router.navigate([timer.getId()], {relativeTo: this.route});
  }

  async loadTimerData(timer) {
    this.timer = await this.getTimer(timer.id);
    console.warn('timer', this.timer);
  }

  private async getTimer(id: number) {
    const data = await this.timerService.getTimer(id, {params: {fields: 'set'}});
    console.log(' async data', data);
  }

  goToCreate() {
    this.router.navigate(['new']);
  }

}
