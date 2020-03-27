import { NoopInterceptor } from './noop-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
];
