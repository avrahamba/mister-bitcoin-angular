import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailsPageComponent } from './views/contact-details-page/contact-details-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { StatisticPageComponent } from './views/statistic-page/statistic-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { SignupComponent } from './views/signup/signup.component';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [IsLoggedInGuard] },
  { path: 'contact', component: ContactPageComponent, canActivate: [IsLoggedInGuard] },
  { path: 'contact/edit', component: ContactEditComponent, canActivate: [IsLoggedInGuard] },
  { path: 'contact/edit/:id?', component: ContactEditComponent, canActivate: [IsLoggedInGuard] },
  { path: 'contact/:id', component: ContactDetailsPageComponent, canActivate: [IsLoggedInGuard] },
  { path: 'statistic', component: StatisticPageComponent, canActivate: [IsLoggedInGuard] },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
