import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { DataListModule } from './modules/data-list/data-list.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataListModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
