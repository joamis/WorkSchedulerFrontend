import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoggedStudentService} from './logged-student.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: LoggedStudentService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `jwt ${this.auth.getAuthKey()}`
      }
    });

    return next.handle(request);
  }
}
