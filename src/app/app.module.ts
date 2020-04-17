import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './views/contact-details-page/contact-details-page.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NavBarComponent } from './cmps/nav-bar/nav-bar.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { SignupComponent } from './views/signup/signup.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ChartComponent,
    ContactFilterComponent,
    NavBarComponent,
    ContactEditComponent,
    SignupComponent,
    MoveListComponent,
    TransferFundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
