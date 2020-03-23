import { NoopInterceptor } from '../noop-interceptor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';

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

  patch(uri: string, body?: any) {
    return this.httpClient.patch(`${this.apiUrl}` + uri, body);
  }

  put(uri: string, body?: any) {
    return this.httpClient.put(`${this.apiUrl}` + uri, body);
  }

  delete(uri: string, options?: any) {
    return this.httpClient.delete(`${this.apiUrl}` + uri, options);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client Side error occured
      console.error('An error occured : ', error.error.message);
    } else {
      // the back returned an unsucessful response code
      // display server info response
      console.error(
        `Backend returned code ${error.status}, `
          + `body was : ${error.error}`
        );

      }

      return throwError('Bad Response');
  }
}
