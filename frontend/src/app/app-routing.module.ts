import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LopenComponent } from './lopen/lopen.component';
import { ZwemmenComponent } from './zwemmen/zwemmen.component';
import { BadmintonComponent } from './badminton/badminton.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'lopen', component: LopenComponent },
    { path: 'zwemmen', component: ZwemmenComponent },
    { path: 'badminton', component: BadmintonComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
