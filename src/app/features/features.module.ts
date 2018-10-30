import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ComponentsModule
  ],
  declarations: [FeaturesComponent]
})
export class FeaturesModule { }
