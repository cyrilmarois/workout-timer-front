import { map } from "rxjs/operators";
import { User } from "../../user/user.model";
import { Injectable } from "@angular/core";
import { HttpClientService } from "./http-client.service";

@Injectable({
  providedIn: "root",
})
export class UserApiService {
  private BASE_URI = "users";
  constructor(private httpClientService: HttpClientService) {}

  create(body: any) {
    return this.httpClientService
      .post(`${this.BASE_URI}`, body)
      .pipe(map((res: any) => new User().deserializable(res)));
  }
}
