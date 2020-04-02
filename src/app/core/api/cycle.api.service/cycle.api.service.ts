import { HttpClientService } from '../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CycleApiService {
  private BASE_URI = 'cycles';
  constructor(private httpClientService: HttpClientService) {
  }
}
