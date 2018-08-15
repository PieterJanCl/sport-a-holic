import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SportDataService } from './services/sport-data.service';
import { CalenderService } from './services/event.service';
import { basehttpInterceptorProviders } from '../http-interceptors';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    SportDataService,
    CalenderService,
    basehttpInterceptorProviders
  ],
  exports: [],
  bootstrap: []
})
export class CoreModule { }
