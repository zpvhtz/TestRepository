import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../../../service/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { KendoGridComponent } from 'src/app/shared/kendo-grid/kendo-grid.component';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: any;
    total: any;
    pageSize: any = 10;
    pageNumber: any = 1;

    @ViewChild("btnGroup") btnGroupTemplate: TemplateRef<any>;
    // @ViewChild("grid1", ) gridComponent: KendoGridComponent;

    buttons: any[] = [
        { id: "btnEditUser", name: "Edit", evt: 2 },
        { id: "btnDeleteUser", name: "Delete", evt: 3 }
    ]

    columns: any[] = [
        { field: "id", title: "ID" },
        { field: "name", title: "Name"},
        { field: "avatar", title: "Avatar" },
        { field: "createdAt", title: "Created At" },
        { field: "roleid", title: "Role ID" },
        { field: "_", title: "", template: this.btnGroupTemplate }
    ];

    constructor(private router: Router, private http: HttpClient, private usersService: UserService) { }

    ngOnInit(): void {
        this.getUsers();
    }

    ngAfterViewInit(): void {
        this.updateColumns();
    }

    updateColumns = () => {
        this.columns.find(item => item.field == "_").template = this.btnGroupTemplate;
    }

    getUsers() {
        this.usersService.getUsers(this.pageSize, this.pageNumber).subscribe(users => {
            this.users = users
        });

        this.usersService.getUsers().subscribe(users => {
            this.total = users.length;
        })
    }

    deleteUser(id) {
        this.usersService.deleteUser(id).subscribe(res => this.getUsers());
    }

    evtCreateUser() {
        this.router.navigate([`/management/usermanagement/create`]);
    }

    evtEditUser(id) {
        // this.router.navigate([`/management/usermanagement/update`]);
    }

    evtDeleteUser(id) {
        this.deleteUser(id);
    }

    evtSkip = (skip) => {
        this.pageNumber = (skip / this.pageSize ) + 1;
        this.getUsers();
    }
}