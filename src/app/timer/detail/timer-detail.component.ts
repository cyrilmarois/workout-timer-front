import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-detail',
  templateUrl: './timer-detail.component.html',
  styleUrls: ['./timer-detail.component.sass']
})
export class TimerDetailComponent implements OnInit {
  @Input() timer: any;

  constructor() { }

  ngOnInit() {

  }

}
