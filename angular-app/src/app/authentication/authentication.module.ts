import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { ServiceModule } from '../service/service.module';


@NgModule({
  declarations: [AuthenticationComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ServiceModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class AuthenticationModule { }
