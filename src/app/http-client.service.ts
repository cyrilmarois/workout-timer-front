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

  get(uri: string, options: any) {
    return this.httpClient.get(`${this.apiUrl}` + uri, options);
  }

  post(uri: string, body: any) {
    return this.httpClient.post(`${this.apiUrl}` + uri, body);
  }

  patch(uri: string, options?: any) {
    return this.httpClient.patch(`${this.apiUrl}` + uri, options);
  }

  put(uri: string, options?: any) {
    return this.httpClient.put(`${this.apiUrl}` + uri, options);
  }

  delete(uri: string, options?: any) {
    return this.httpClient.delete(`${this.apiUrl}` + uri, options);
  }
}
