import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';

import { ProjectdetailsRoutingModule } from './projectdetails-routing.module';
import { ProjectdetailsComponent } from './projectdetails.component';
import {ComponentsModule} from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectdetailsRoutingModule,
    ComponentsModule,
    CKEditorModule,
    HttpClientModule
  ],
  declarations: [ProjectdetailsComponent, ProjectdetailComponent]
})
export class ProjectdetailsModule { }
