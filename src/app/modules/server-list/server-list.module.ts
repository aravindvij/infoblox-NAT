import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerListRoutingModule } from './server-list-routing.module';
import { ServerListComponent } from './server-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterPipe } from 'src/app/core/filterPipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateServerDialogComponent } from './create-server-dialog/create-server-dialog.component';
import { ServerDataService } from './server-data.service';


@NgModule({
  declarations: [
    ServerListComponent,
    FilterPipe,
    CreateServerDialogComponent
  ],
  imports: [
    CommonModule,
    ServerListRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ServerListModule { }
