import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListComponent } from './data-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dataList',
    pathMatch: 'full'
  },
  {
    path: 'dataList',
    component: DataListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataListRoutingModule { }
