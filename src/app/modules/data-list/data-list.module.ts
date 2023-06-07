import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataListRoutingModule } from './data-list-routing.module';
import { DataListComponent } from './data-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterPipe } from 'src/app/core/filterPipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateItemDialogComponent } from './create-item-dialog/create-item-dialog.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    DataListComponent,
    FilterPipe,
    CreateItemDialogComponent
  ],
  imports: [
    CommonModule,
    DataListRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DataListModule { }
