import { Sound } from '../../../sound/sound.model';
import { HttpClientService } from '../http-client.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SoundApiService {
  private BASE_URI = 'sound';

  constructor(private httpClientService: HttpClientService) {
  }

  getAll(options?: any) {
    return this.httpClientService
      .get(`${this.BASE_URI}/`, options)
      .pipe(
        map((res: any) => {
          const dataArray: Sound[] = [];
          if (res.data) {
            res.data.forEach(element => {
              element = new Sound().deserializable(element);
              dataArray.push(element);
            });
          }

          return dataArray;
        })
      );
  }

  get(id: number, options?: any) {
    return this.httpClientService
      .get(`${this.BASE_URI}/` + id, options)
      .pipe(
        map((res: any) => new Sound().deserializable(res))
      );
  }
}
