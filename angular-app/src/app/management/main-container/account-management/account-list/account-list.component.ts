import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AccountService } from 'src/app/service/account.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
    users: any;
    accounts: any;
    total: any;
    pageSize: any = 10;
    pageNumber: any = 1;
    
    @ViewChild("btnGroup") btnGroupTemplate: TemplateRef<any>;

    buttons: any[] = [
        { id: "btnEditUser", name: "Edit", evt: 2 },
        { id: "btnDeleteUser", name: "Delete", evt: 3 }
    ]

    columns: any[] = [
        { field: "id", title: "ID" },
        { field: "username", title: "Username"},
        { field: "userId", title: "User ID" },
        { field: "employeeId", title: "Employee ID" },
        { field: "_", title: "", template: this.btnGroupTemplate }
    ];

    constructor(private router: Router, private http: HttpClient, private accountService: AccountService) { }

    ngOnInit(): void {
        this.accountService.test().subscribe(z => console.log(z));
        this.getAccounts();
    }

    ngAfterViewInit(): void {
        this.updateColumns();
    }

    updateColumns = () => {
        this.columns.find(item => item.field == "_").template = this.btnGroupTemplate;
    }

    getAccounts() {
        let local = localStorage.getItem(environment.localStorageToken);
        
        if(local !== null) {
            this.accountService.getAccounts().subscribe(res => {
                this.accounts = res,
                this.total = res.length;
            });
        }
    }

    deleteAccount(id) {
        // this.usersService.deleteUser(id).subscribe(res => this.getUsers());
    }

    evtCreateAccount() {
        // this.router.navigate([`/management/usermanagement/create`]);
    }

    evtEditAccount(id) {
        // this.router.navigate([`/management/usermanagement/update`]);
    }

    evtDeleteAccount(id) {
        // this.deleteUser(id);
    }

    evtSkip = (skip) => {
        this.pageNumber = (skip / this.pageSize ) + 1;
        this.getAccounts();
    }
}
