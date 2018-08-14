import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { LopenComponent } from './lopen/lopen.component';
import { ZwemmenComponent } from './zwemmen/zwemmen.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './user/register/register.component';
import { FietsenComponent } from './fietsen/fietsen.component';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NewSportComponent } from './home/new-sports/new-sports.component';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LopenComponent,
    RegisterComponent,
    ZwemmenComponent,
    FietsenComponent,
    NotFoundComponent,
    NewSportComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
