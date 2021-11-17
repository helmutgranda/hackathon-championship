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


const appRoutes: Routes = [
  {path: '', component: AppComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes),
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
