import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management.component';

const routes: Routes = [
    // { path: '', component: ManagementComponent },
    // { path: 'management/usermanagement', loadChildren: () => import('./main-container/user-management/user-management.module').then(m => m.UserManagementModule) },
    { path: '', component: ManagementComponent, children: [
            { path: 'management/usermanagement', loadChildren: () => import('./main-container/user-management/user-management.module').then(m => m.UserManagementModule) },
            { path: 'management/accountmanagement', loadChildren: () => import('./main-container/account-management/account-management.module').then(m => m.AccountManagementModule) },
        ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
