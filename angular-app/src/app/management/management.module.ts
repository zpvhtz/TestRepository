import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { UserComponent } from './top-nav/user/user.component';

@NgModule({
  declarations: [ManagementComponent, TopNavComponent, LeftNavComponent, MainContainerComponent, UserComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ],
  exports: [
  ]
})
export class ManagementModule { }
  