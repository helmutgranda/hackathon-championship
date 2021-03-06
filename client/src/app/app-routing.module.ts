import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { SelectorComponent } from './selector/selector.component';
import { EvAcademyComponent } from './ev-academy/ev-academy.component';
import { ProfileComponent } from './profile/profile.component';
import { EvAcademyChargingComponent } from './ev-academy-charging/ev-academy-charging.component';
import { UploadComponent } from './upload/upload.component';
import { EvAcademyWeatherComponent } from './ev-academy-weather/ev-academy-weather.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { LearningExperienceOneComponent } from './learning-experience-one/learning-experience-one.component';
import { LearningCourseResultComponent } from './learning-course-result/learning-course-result.component';
import { LyrqVideoComponent } from './lyrq-video/lyrq-video.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'ev-academy', component: EvAcademyComponent },
  { path: 'ev-academy-charging', component: EvAcademyChargingComponent },
  { path: 'ev-academy-weather', component: EvAcademyWeatherComponent },
  { path: 'ev-academy-amperage', component: LearningExperienceOneComponent },
  { path: 'ev-result', component: LearningCourseResultComponent },
  { path: 'lyrq-video', component: LyrqVideoComponent },
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
