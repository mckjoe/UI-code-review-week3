import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { WorkComponent } from './work/work.component';
import { FunComponent } from './fun/fun.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'who',
    component: WhoComponent
  },
  {
    path: 'what',
    component: WhatComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'fun',
    component: FunComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
