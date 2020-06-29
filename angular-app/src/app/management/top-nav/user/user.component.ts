import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    user: any = {
    }

    constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private employeeService: EmployeeService, private authGuard: AuthGuardService) { }

    ngOnInit(): void {
        this.getInformation();
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        // this.getInformation()
    }

    checkLoggedIn = () => {
        let result = localStorage.getItem(environment.localStorageToken);
        // console.log(result)
        // Note: tại sao ra nhiều lần

        if(result == null) {
            return false;
        }

        return true;
    }

    logOut = () => {
        localStorage.removeItem(environment.localStorageToken);
        // this.authGuard.canActivate(
        //     this.route.snapshot,
        //     this.router.routerState.snapshot
        // );
        this.router.navigate(['/management']);
    }

    getInformation = () => {
        let local = localStorage.getItem(environment.localStorageToken);

        if(local !== null) {
            let jsonLocal = JSON.parse(local);

            if(environment.authRole.Employee === jsonLocal.role)
            {
                this.employeeService.getLocalEmployee(jsonLocal.id).subscribe(res => {
                    this.user = res;                
                });
            }
            else
            {
                this.userService.getLocalUser(jsonLocal.id, jsonLocal.accessToken).subscribe(res => {
                    this.user = res;                
                });
            }            
        }
    }
}
