import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      console.log('HttpRequest : ' + HttpRequest);
      console.log('HttpHandler : ' + HttpHandler);

      const reqUpdate = req.clone({
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': 'https://marois-cyril.fr',
        })
      });

      return next.handle(reqUpdate);
    }
}
