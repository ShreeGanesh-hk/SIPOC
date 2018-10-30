import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectinfoRoutingModule } from './projectinfo-routing.module';
import { ProjectinfoComponent } from './projectinfo.component';
import {ComponentsModule} from '../../components/components.module' ;

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ProjectinfoRoutingModule
  ],
  declarations: [ProjectinfoComponent]
})
export class ProjectinfoModule { }
