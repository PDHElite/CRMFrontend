import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BusinessComponent } from './components/business/business.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CommunicationsComponent } from './components/communications/communications.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    BusinessComponent,
    CampaignComponent,
    ContactsComponent,
    CommunicationsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'Products', component:ProductsComponent},
      {path: 'Business', component:BusinessComponent},
      {path: 'Campaign', component:CampaignComponent},
      {path: 'Contacts', component:ContactsComponent},
      {path: 'Communications', component:CommunicationsComponent},
      {path: '**', component:PageNotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
