import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { basehttpInterceptorProviders } from '../http-interceptors';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [basehttpInterceptorProviders, AuthenticationService, NavigationComponent]
})
export class UserModule { }
