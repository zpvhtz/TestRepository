import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	users: any;
    user: any;

	httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer `
        })
	}
	
	constructor(private http: HttpClient) { }
    
    getUsers(): Observable<any>;
    getUsers(pageSize: any, pageNumber: any): Observable<any>;
    getUsers(pageSize?: any, pageNumber?: any): Observable<any> {
        if(pageSize === undefined && pageNumber === undefined) {
           return this.http.get(`${environment.apiUrl}/users`);
        } else {
            return this.http.get(`${environment.apiUrl}/users?page=${pageNumber}&limit=${pageSize}`);
        }
    }

    getUser(id) {
        return this.http.get(`${environment.apiUrl}/users/${id}`)
    }

    createUser();
    createUser(name: string);
    createUser(name?: string) {
        if(name === undefined)
            return this.http.post(environment.apiUrl + 'users', '');
        else {
            let data = {
                name: name
            };

            return this.http.post(`${environment.apiUrl}users`, JSON.stringify(data),this.httpOptions);
        }
    }

    deleteUser(id) {
        return this.http.delete(environment.apiUrl + `users/${id}`)
    }

    updateUser(id, name) {
        let data = {
            name: name
        }
        
        return this.http.put(environment.apiUrl + `users/${id}`, JSON.stringify(data), this.httpOptions);
    }

    getLocalUser = (id, token) => {
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', `Bearer ${token}`);
        
        return this.http.get(`${environment.localApiUrl}users/getById?id=${id}`, this.httpOptions);
        // return this.http.get(`${environment.localApiUrl}users/getById?id=15FFA6EF-D453-448C-8969-C8890DB96739`, this.httpOptions);
    }
}
