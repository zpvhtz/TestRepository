import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountManagementComponent } from './account-management.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

const routes: Routes = [
	{ path: '', component: AccountManagementComponent, children: [
		{ path: 'list', component: AccountListComponent, canActivate: [AuthGuardService], }
	]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountManagementRoutingModule { }
