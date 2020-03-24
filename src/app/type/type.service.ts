import { Type } from './type.model';
import { TypeApiService } from './../core/api/type.api.service/type.api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private typeApiService: TypeApiService) {}

  async getType(id: number, options?: any) {
    const res = await this.typeApiService.getType(id, options)
      .toPromise();

    return res;
  }

  async getTypes(options?: any) {
    const res = await this.typeApiService.getTypes(options)
      .toPromise();

    return res;
  }
}
