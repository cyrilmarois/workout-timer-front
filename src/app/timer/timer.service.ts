import { HttpClientService } from '../core/http-client.service';
import { Injectable } from '@angular/core';
import { Timer } from './timer.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private BASE_URI = 'timer';
  private timers: [];

  constructor(private httpClient: HttpClientService) {}

  async list(options?: any) {
    const res: any =  await this.httpClient.get(`${this.BASE_URI}/`, options)
      .toPromise();
    if (res.data) {
      this.timers = res.data.map((timer: any) => new Timer(timer.id, timer.name, timer.description));
    }

    return this.timers;
  }

  async show(id: number, options?: any) {
    const data = await this.httpClient.get(`${this.BASE_URI}/` + id, options)
      .toPromise();

    return data;
  }

  async update(id: number, body: any) {
    const data = await this.httpClient.put(`${this.BASE_URI}/` + id , body)
      .toPromise();

    return data;
  }

  async create(body: any) {
    const data = await this.httpClient.post(`${this.BASE_URI}/`, body)
      .toPromise();

    return data;
  }

  async delete(id: number, options?: any) {
    const data = await this.httpClient.delete(`${this.BASE_URI}/` + id, options)
      .toPromise();

    return data;
  }
}
