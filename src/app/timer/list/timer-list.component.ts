import { TimerService } from './../timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.sass']
})
export class TimerListComponent implements OnInit {

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.list();
  }

   private async list() {
    const timer = await this.timerService.list({fields: 'timer'});
    console.log('timer', timer);
  }


}
