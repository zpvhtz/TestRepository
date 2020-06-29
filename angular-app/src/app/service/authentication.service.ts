import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    }
    
    authenticateAccount = (username: any, password: any) => {
        let data = {
            username: username,
            password: password
        }

        return this.http.post(`${environment.localApiUrl}authenticate/authenticateAccount`, JSON.stringify(data), this.httpOptions);
    }

    getToken = () => {
        return localStorage.getItem(environment.localStorageToken);
    }

    public isAuthenticated(): boolean {
        const token = JSON.parse(this.getToken());

        if(token === null)
            return false;

        return this.tokenNotExpired(token.expiredDate);
    }

    public tokenNotExpired(token) {
        if(token) {
            return true;
            // var jwtHelper = new JwtHelperService();
            // return token != null && !jwtHelper.isTokenExpired(token);
        } else {
            return false;
        }
    }
}
