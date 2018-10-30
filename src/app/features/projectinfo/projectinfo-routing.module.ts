import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectinfoComponent } from './projectinfo.component';

const routes: Routes = [
  {path:'',component:ProjectinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectinfoRoutingModule { }
