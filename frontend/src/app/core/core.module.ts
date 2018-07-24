import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Sport } from './models/sport';
import { SportDataService } from './services/sportDataService';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    SportDataService
  ],
  exports: [],
  bootstrap: []
})
export class CoreModule { }
