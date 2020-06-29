import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class ServiceModule { }
