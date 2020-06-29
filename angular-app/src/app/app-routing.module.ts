import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
    { path: 'management', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule) },
    { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
    { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
    { path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
