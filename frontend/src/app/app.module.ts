import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PatienthomeComponent } from './components/patienthome/patienthome.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { DoctorhomeComponent } from './components/doctorhome/doctorhome.component';
import { DoctorloginComponent } from './components/doctorlogin/doctorlogin.component';
import { DataService } from './services/data.service';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminguardService } from './services/adminguard.service';
import { SignupComponent } from './components/signup/signup.component';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full'
  },
  {path:'home',component:PatienthomeComponent,canActivate:[AuthGuardService]},
  {path:'doctorlogin',component:DoctorloginComponent},
  {path:'adminhome',component:AdminhomeComponent,canActivate:[AdminguardService]},
  {path:'doctorhome',component:DoctorhomeComponent,canActivate:[DataService]},
  {path:'logout',component:LogoutComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatienthomeComponent,
    LoginComponent,
    AdminhomeComponent,
    DoctorhomeComponent,
    DoctorloginComponent,
    LogoutComponent,
    SignupComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService,AdminguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
