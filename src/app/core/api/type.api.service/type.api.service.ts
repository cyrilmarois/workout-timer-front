import { HttpClientService } from '../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeApiService {
  constructor(private httpClient: HttpClientService) {
  }
}
