import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username:any;

    constructor(private authenticationService : AuthenticationService, private router : Router) { }

    ngOnInit(): void {
    }

    logIn = (username, password) => {
        this.authenticationService.authenticateAccount(username, password).subscribe(res => {
            if(res !== null) {
                localStorage.setItem(environment.localStorageToken, JSON.stringify(res));
                this.router.navigate(['/management/']);
            }
        });
    }
}
