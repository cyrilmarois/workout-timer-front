import { SetApiService } from '../core/api/set.api.service/set.api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.sass']
})
export class SetComponent implements OnInit {

  constructor(private setApiService: SetApiService) { }

  ngOnInit() {

  }

}
