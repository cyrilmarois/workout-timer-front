import { Timer } from './../timer.model';
import { TimerService } from '../timer.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-detail',
  templateUrl: './timer-detail.component.html',
  styleUrls: ['./timer-detail.component.sass']
})
export class TimerDetailComponent implements OnInit {
  id: number;
  timer: Timer;

  constructor(private timerService: TimerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        console.log('id', params['id']);
        this.id = +params['id'];
        this.getTimer(this.id);
        console.log('timer', this.timer);
      });
  }

  async getTimer(id: number) {
    this.timer = await this.timerService.getTimer(this.id, {params: {fields: 'set'}});
    console.log(' async timer', this.timer);
  }


}
