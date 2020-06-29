import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor(private authService: AuthenticationService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		let requestOption:any = {};
     
		if(this.authService.isAuthenticated()) {
			if(request.url.includes(environment.apiUrl)) {
				return next.handle(request);
			}

			let token = JSON.parse(this.authService.getToken());

			requestOption.setHeaders = {
				Authorization: `Bearer ${token.accessToken}`
			}
		} 
		
		request = request.clone(requestOption); 
		return next.handle(request);
	}
}
