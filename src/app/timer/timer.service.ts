import { HttpClientService } from './../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private BASE_URI = 'timer';

  constructor(private httpClient: HttpClientService) {}

  async list(options?: any) {
    const data = await this.httpClient.get(`${this.BASE_URI}/`, options)
      .toPromise();

    return data;
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
