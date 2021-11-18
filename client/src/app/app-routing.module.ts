import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { SelectorComponent } from './selector/selector.component';
import { EvAcademyComponent } from './ev-academy/ev-academy.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'ev-academy', component: EvAcademyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'selector', component: SelectorComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }