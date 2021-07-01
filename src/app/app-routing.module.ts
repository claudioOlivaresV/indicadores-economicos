import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)},
  { path: 'price-detail/:type',  loadChildren: () => import('./price-detail/price-detail.module').then(m => m.PriceDetailModule) },
  { path: 'indicator-detail/:type/:date',  loadChildren: () => import('./indicator-detail/indicator-detail.module').then(m => m.IndicatorDetailModule) },


  { path: '**', redirectTo: 'list' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
