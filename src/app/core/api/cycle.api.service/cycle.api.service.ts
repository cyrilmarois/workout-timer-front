import { HttpClientService } from '../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CycleApiService {
  constructor(private httpClient: HttpClientService) {
  }
}
