import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAuthToken() {
    return 'toto';
  }
}
