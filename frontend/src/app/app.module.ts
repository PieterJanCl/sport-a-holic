import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { LopenComponent } from './lopen/lopen.component';
import { ZwemmenComponent } from './zwemmen/zwemmen.component';
import { BadmintonComponent } from './badminton/badminton.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LopenComponent,
    ZwemmenComponent,
    BadmintonComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
