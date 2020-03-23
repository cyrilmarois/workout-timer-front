import { HttpClientService } from '../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundApiService {
  private BASE_URI = 'sound';
  sounds: [] = [];

  constructor(private httpClient: HttpClientService) {
  }

  async getSounds(options ?: any) {
    const res: any = this.httpClient.get(`${this.BASE_URI}`, options)
      .toPromise();

    if (res.data) {
      this.sounds = res.data;
    }

    return this.sounds;
  }
}
