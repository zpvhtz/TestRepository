import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class EmployeeService {
	constructor(private http: HttpClient) { }

	httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer `
        })
	}

	getLocalEmployee = (id) => {
        
        return this.http.get(`${environment.localApiUrl}employees/getById?id=${id}`, this.httpOptions);
        // return this.http.get(`${environment.localApiUrl}users/getById?id=15FFA6EF-D453-448C-8969-C8890DB96739`, this.httpOptions);
    }
}
