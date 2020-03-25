import { Sound } from './sound.model';
import { SoundApiService } from './../core/api/sound.api.service/sound.api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  constructor(private soundApiService: SoundApiService) {}

  async getSounds(options?: any) {
    const res = await this.soundApiService.getAll(options)
      .toPromise();

    return res;
  }
  async getSound(id: number, options?: any) {
    const res = await this.soundApiService.get(id, options)
      .toPromise();

    return res;
  }
}
