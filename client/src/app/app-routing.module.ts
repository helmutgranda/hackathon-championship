import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { SelectorComponent } from './selector/selector.component';
import { EvAcademyComponent } from './ev-academy/ev-academy.component';
import { ProfileComponent } from './profile/profile.component';
import { EvAcademyChargingComponent } from './ev-academy-charging/ev-academy-charging.component';
import { UploadComponent } from './upload/upload.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'ev-academy', component: EvAcademyComponent },
  { path: 'ev-academy-charging', component: EvAcademyChargingComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'selector', component: SelectorComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
