import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from './service/api-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiServiceService]
})
export class CoreModule { }
