import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { ServiceModule } from '../../../service/service.module';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [
    UserManagementComponent,
    UserListComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule,
    ServiceModule
  ],
  exports: [
    
  ]
})
export class UserManagementModule { }
