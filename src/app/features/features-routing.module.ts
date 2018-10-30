import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeaturesComponent} from './features.component';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'prefix'},
      {path: 'home', loadChildren: './home/home.module#HomeModule'},
      {path: 'projectinfo', loadChildren: './projectinfo/projectinfo.module#ProjectinfoModule'},
      {path: 'projectdetails', loadChildren: './projectdetails/projectdetails.module#ProjectdetailsModule'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
