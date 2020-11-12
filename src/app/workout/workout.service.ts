import { WorkoutApiService } from "../core/api/workout/workout.api.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WorkoutService {
  constructor(private timerApiService: WorkoutApiService) {}

  async getWorkouts(options?: any) {
    const res: any = await this.timerApiService.getAll(options).toPromise();

    return res;
  }

  async getWorkout(id: number, options?: any) {
    const res: any = await this.timerApiService.get(id, options).toPromise();

    return res;
  }

  async updateWorkout(id: number, body: any) {
    const res: any = await this.timerApiService.update(id, body).toPromise();

    return res;
  }

  async createWorkout(body: any) {
    const res: any = await this.timerApiService.create(body).toPromise();
    console.warn("res", res);
    return res;
  }

  async delete(id: number, options?: any) {
    const res: any = await this.timerApiService.delete(id, options).toPromise();

    return res;
  }
}
