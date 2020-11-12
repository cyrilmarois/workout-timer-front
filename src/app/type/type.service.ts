import { Type } from "./type.model";
import { TypeApiService } from "../core/api/type.api.service/type.api.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TypeService {
  constructor(private typeApiService: TypeApiService) {}

  async getTypes(options?: any) {
    const res = await this.typeApiService.getAll(options).toPromise();

    return res;
  }
  async getType(id: number, options?: any) {
    const res = await this.typeApiService.get(id, options).toPromise();

    return res;
  }
}
