import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer'
        })
    }

    getAccounts = () : Observable<any> => {
        return this.http.get(`${environment.localApiUrl}accounts/getAll`, this.httpOptions);
        // let z: Observable<>;
    }

    testUrlencoded = () => {
        let httpOptions2 = {
            headers: new HttpHeaders({
                'Content-Type':  'application/x-www-form-urlencoded',
            })
        }

        let body = new URLSearchParams();
        body.set('name', 'asdfaasasdads');
        console.log('body')
        console.log(body)
        console.log(body.toString())

        setTimeout(() => {
            console.log(body)
        }, 5000)
        return this.http.post(`${environment.localApiUrl}test`, body.toString(), httpOptions2)
    }

    test = () => {
        let httpOptions2 = {
            headers: new HttpHeaders({
                'Content-Type':  'multipart/form-data',
            })
        }
        
        let payload = new FormData();
        payload.append('name', 'nhodata');

        return this.http.post(`${environment.localApiUrl}test`, payload)
    }
}
