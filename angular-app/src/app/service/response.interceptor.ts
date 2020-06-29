import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService, private router: Router) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        return next.handle(request).pipe(tap(event => {
            // console.log('event')
        }, error => {
            // console.log('error')
            if(error.status === 401) {
                console.log('Unauthorized');
            }
        }));
    }
}
