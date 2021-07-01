import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicatorDetailRoutingModule } from './indicator-detail-routing.module';
import { IndicatorDetailComponent } from './indicator-detail.component';
import { MaterialModule } from '../shared/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    IndicatorDetailComponent
  ],
  imports: [
    CommonModule,
    IndicatorDetailRoutingModule,
    MaterialModule,
    NgxChartsModule,
    NgxSkeletonLoaderModule

    
  ]
})
export class IndicatorDetailModule { }
