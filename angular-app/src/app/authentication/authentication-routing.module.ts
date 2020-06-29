import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: AuthenticationComponent, children: [
        { path: 'authentication/login', component: LoginComponent },
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
