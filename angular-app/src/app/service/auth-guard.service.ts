import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private router: Router) { }
	  
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		let local = localStorage.getItem(environment.localStorageToken);

		if(local !== null) {
			return true;
		}

		this.router.navigate(['/authentication/login']);
		return false;
	}
}
