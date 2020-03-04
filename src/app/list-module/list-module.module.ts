import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListModuleRoutingModule } from './list-module-routing.module';
import { ListPageComponent } from './list-page/list-page.component';


@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    ListModuleRoutingModule
  ]
})
export class ListModuleModule { }
