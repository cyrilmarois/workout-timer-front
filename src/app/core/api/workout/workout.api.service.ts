import { Workout } from "./../../../workout/workout.model";
import { map } from "rxjs/operators";
import { HttpClientService } from "../http-client.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WorkoutApiService {
  private BASE_URI = "workouts";

  constructor(private httpClientService: HttpClientService) {}

  getAll(options?: any) {
    return this.httpClientService.get(`${this.BASE_URI}/`, options).pipe(
      map((res: any) => {
        const dataArray: Workout[] = [];
        if (res.data) {
          res.data.forEach((element) => {
            element = new Workout().deserializable(element);
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
      .pipe(map((res: any) => new Workout().deserializable(res)));
  }

  update(id: number, body: any) {
    return this.httpClientService
      .patch(`${this.BASE_URI}/` + id, body)
      .pipe(map((res: any) => new Workout().deserializable(res)));
  }

  create(body: any) {
    console.warn("body", body);
    return this.httpClientService
      .post(`${this.BASE_URI}`, body)
      .pipe(map((res: any) => new Workout().deserializable(res)));
  }

  delete(id: number, options?: any) {
    return this.httpClientService.delete(`${this.BASE_URI}/` + id, options);
  }
}
