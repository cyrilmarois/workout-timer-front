import { TimerApiService } from './../core/api/timer.api.service/timer.api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  constructor(private timerApiService: TimerApiService) {}

  async getTimers(options?: any) {
    const res: any =  await this.timerApiService.getAll(options)
      .toPromise();

    return res;
  }

  async getTimer(id: number, options?: any) {
    const res: any = await this.timerApiService.get(id, options)
      .toPromise();

    return res;
  }

  async updateTimer(id: number, body: any) {
    const res: any = await this.timerApiService.update(id , body)
      .toPromise();

    return res;
  }

  async createTimer(body: any) {
    const res: any = await this.timerApiService.create(body)
      .toPromise();
    console.warn('res', res);
    return res;
  }

  async delete(id: number, options?: any) {
    const res: any = await this.timerApiService.delete(id, options)
      .toPromise();

    return res;
  }
}
