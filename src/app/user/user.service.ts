import { User } from "./user.model";
import { UserApiService } from "./../core/api/user.api.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private userApiService: UserApiService) {}

  async createUser(body: any) {
    const res: User = await this.userApiService.create(body).toPromise();
    console.warn({ res });

    return res;
  }
}
