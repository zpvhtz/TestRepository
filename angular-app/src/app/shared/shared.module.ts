import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { CreatePageComponent } from './create-page/create-page.component';


@NgModule({
  declarations: [
    SharedComponent,
    KendoGridComponent,
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    GridModule
  ],
  exports: [
    KendoGridComponent,
    CreatePageComponent
  ]
})
export class SharedModule { }
