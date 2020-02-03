import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  get(uri: string, params: any) {
    return this.httpClient.get(`${this.apiUrl}` + uri, params);
  }

  create(uri: string, body: any) {
    return this.httpClient.post(`${this.apiUrl}` + uri, body);
  }

  update(uri: string, body: any) {
    return this.httpClient.patch(`${this.apiUrl}` + uri, body);
  }

  delete(uri: string, params: any) {
    return this.httpClient.delete(`${this.apiUrl}` + uri, params);
  }
}
