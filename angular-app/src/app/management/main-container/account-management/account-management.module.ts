import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagementRoutingModule } from './account-management-routing.module';
import { AccountManagementComponent } from './account-management.component';
import { ServiceModule } from 'src/app/service/service.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountListComponent } from './account-list/account-list.component';


@NgModule({
	declarations: [AccountManagementComponent, AccountListComponent],
	imports: [
		CommonModule,
		AccountManagementRoutingModule,
		SharedModule,
		ServiceModule
	]
})
export class AccountManagementModule { }
