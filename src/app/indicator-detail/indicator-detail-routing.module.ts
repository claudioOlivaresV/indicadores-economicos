import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicatorDetailComponent } from './indicator-detail.component';

const routes: Routes = [
  { path: '', component: IndicatorDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicatorDetailRoutingModule { }
