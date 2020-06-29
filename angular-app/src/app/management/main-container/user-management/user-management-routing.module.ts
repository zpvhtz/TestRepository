import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
    { path: '', component: UserManagementComponent, children: [
            { path: 'list', component: UserListComponent },
            { path: 'create', component: UserCreateComponent }
        ] 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
