import { HttpClientService } from '../http-client.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn : 'root'
})
export class SetApiService {
  private BASE_URI = 'sets';
  constructor(private httpClientService: HttpClientService) {
  }
}
