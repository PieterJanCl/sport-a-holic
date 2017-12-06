import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LopenComponent } from './lopen/lopen.component';
import { ZwemmenComponent } from './zwemmen/zwemmen.component';
import { BadmintonComponent } from './badminton/badminton.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
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
