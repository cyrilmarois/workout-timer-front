import { Type } from '../../../type/type.model';
import { HttpClientService } from '../http-client.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TypeApiService {
  private BASE_URI = 'type';

  constructor(private httpClientService: HttpClientService) {
  }

  getType(id: number, options?: any) {
    return this.httpClientService
      .get(`${this.BASE_URI}/` + id, options)
      .pipe(
        map((res: any) => new Type().deserializable(res))
      );
  }

  getTypes(options?: any) {
    return this.httpClientService
      .get(`${this.BASE_URI}/`, options)
      .pipe(
        map((res: any) => {
          console.warn('res', res, 'data', res.data);
          const dataArray: Type[] = [];
          if (res.data) {
            res.data.forEach(element => {
              element = new Type().deserializable(element);
              dataArray.push(element);
            });
          }

          return dataArray;
        })
      );
  }
}
