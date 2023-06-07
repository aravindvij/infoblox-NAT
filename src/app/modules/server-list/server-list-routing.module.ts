import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerListComponent } from './server-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dataList',
    pathMatch: 'full'
  },
  {
    path: 'dataList',
    component: ServerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerListRoutingModule { }
