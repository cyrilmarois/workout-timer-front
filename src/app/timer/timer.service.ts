import { HttpClientService } from '../core/http-client.service';
import { Injectable } from '@angular/core';
import { Timer } from './timer.model';
import { ITimer } from './timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private BASE_URI = 'timer';
  private timers: [];
  private timer: Timer;

  constructor(private httpClient: HttpClientService) {}

  async getTimers(options?: any) {
    const res: any =  await this.httpClient.get(`${this.BASE_URI}/`, options)
      .toPromise();
    if (res.data) {
      this.timers = res.data.map((timer: any) => new Timer(timer.id, timer.name, timer.description));
    }

    return this.timers;
  }

  async getTimer(id: number, options?: any) {
    const res: any = await this.httpClient.get(`${this.BASE_URI}/` + id, options)
      .toPromise();

    if (res.id) {
      this.timer = new Timer(res.id, res.name, res.description);
    }

    return this.timer;
  }

  async update(id: number, body: any) {
    const res: any = await this.httpClient.put(`${this.BASE_URI}/` + id , body)
      .toPromise();

    return res;
  }

  async create(body: any) {
    const res: any = await this.httpClient.post(`${this.BASE_URI}/`, body)
      .toPromise();

    return res;
  }

  async delete(id: number, options?: any) {
    const res: any = await this.httpClient.delete(`${this.BASE_URI}/` + id, options)
      .toPromise();

    return res;
  }
}
