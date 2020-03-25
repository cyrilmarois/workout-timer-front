import { map } from 'rxjs/operators';
import { Timer } from './../../../timer/timer.model';
import { HttpClientService } from '../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerApiService {
  private BASE_URI = 'timer';

  constructor(private httpClientService: HttpClientService) {}

  getAll(options?: any) {
    return this.httpClientService
      .get(`${this.BASE_URI}/`, options)
      .pipe(
        map((res: any) => {
          const dataArray: Timer[] = [];
          if (res.data) {
            res.data.forEach(element => {
              element = new Timer().deserializable(element);
              dataArray.push(element);
            });
          }

          return dataArray;
        }));
  }

  get(id: number, options?: any) {
    return this.httpClientService
      .get(`${this.BASE_URI}/` + id, options)
      .pipe(
        map((res: any) => new Timer().deserializable(res))
      );
  }

  update(id: number, body: any) {
    return this.httpClientService
      .put(`${this.BASE_URI}/` + id , body)
      .pipe(
        map((res: any) => new Timer().deserializable(res))
      );
  }

  create(body: any) {
    return this.httpClientService
      .post(`${this.BASE_URI}/`, body)
      .pipe(
        map((res: any) => new Timer().deserializable(res))
      );
  }

  delete(id: number, options?: any) {
    return this.httpClientService
      .delete(`${this.BASE_URI}/` + id, options);
  }
}
