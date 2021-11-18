import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {NavigationService} from "./navigation/navigation.service";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './login/login.component';
import { SelectorComponent } from './selector/selector.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultHeaderComponent } from './components/default-header/default-header.component';
import { EvAcademyComponent } from './ev-academy/ev-academy.component';
import {ProfileComponent} from "./profile/profile.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {LearningCourseResultComponent} from "./learning-course-result/learning-course-result.component";
import { UploadComponent } from './upload/upload.component';
import { EvAcademyWeatherComponent } from './ev-academy-weather/ev-academy-weather.component';
import { EvacademyHeaderComponent } from './components/evacademy-header/evacademy-header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvAcademyChargingComponent } from './ev-academy-charging/ev-academy-charging.component';
import {MatMenuModule} from "@angular/material/menu";


const appRoutes: Routes = [
  {path: '', component: AppComponent}
]

const materialModules = [
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    SelectorComponent,
    NoPageFoundComponent,
    DefaultHeaderComponent,
    EvAcademyComponent,
    ProfileComponent,
    EvAcademyChargingComponent,
    LearningCourseResultComponent,
    UploadComponent,
    EvAcademyWeatherComponent,
    EvacademyHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes),
    MatCheckboxModule,
    MatIconModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
    MatMenuModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
