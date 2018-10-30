import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';

import { ProjectdetailsRoutingModule } from './projectdetails-routing.module';
import { ProjectdetailsComponent } from './projectdetails.component';
import {ComponentsModule} from '../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    ProjectdetailsRoutingModule,
    ComponentsModule,
    CKEditorModule
  ],
  declarations: [ProjectdetailsComponent]
})
export class ProjectdetailsModule { }
