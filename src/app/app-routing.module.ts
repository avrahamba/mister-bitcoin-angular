import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactDetailsPageComponent} from './views/contact-details-page/contact-details-page.component';
import {HomePageComponent} from './views/home-page/home-page.component';
import {StatisticPageComponent} from './views/statistic-page/statistic-page.component';
import {ContactPageComponent} from './views/contact-page/contact-page.component';
import {ContactEditComponent} from './views/contact-edit/contact-edit.component';
const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'contact', component: ContactPageComponent },
  {path: 'contact/edit', component: ContactEditComponent },
  {path: 'contact/edit/:id?', component: ContactEditComponent },
  {path: 'contact/:id', component: ContactDetailsPageComponent },
  {path: 'statistic', component: StatisticPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
