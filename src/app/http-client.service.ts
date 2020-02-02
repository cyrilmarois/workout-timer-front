import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private BASE_URL = 'http://127.0.0.1:8000/api/v1/';

  constructor(private httpClient: HttpClient) {

  }
  get(uri: string, params: any) {
    return this.httpClient.get(`${this.BASE_URL}` + uri, params);
  }

  create(uri: string, body: any) {
    return this.httpClient.post(`${this.BASE_URL}` + uri, body);
  }

  update(uri: string, body: any) {
    return this.httpClient.patch(`${this.BASE_URL}` + uri, body);
  }

  delete(uri: string, params: any) {
    return this.httpClient.delete(`${this.BASE_URL}` + uri, params);
  }
}
