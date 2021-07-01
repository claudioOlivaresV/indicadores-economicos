import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceDetailRoutingModule } from './price-detail-routing.module';
import { PriceDetailComponent } from './price-detail.component';
import { MaterialModule } from '../shared/material.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    PriceDetailComponent
  ],
  imports: [
    CommonModule,
    PriceDetailRoutingModule,
    MaterialModule,
    NgxSkeletonLoaderModule
  ]
})
export class PriceDetailModule { }
