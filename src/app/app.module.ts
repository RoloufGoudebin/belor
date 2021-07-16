import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ActivitesComponent } from './activites/activites.component';
import { FormationsComponent } from './formations/formations.component';
import { LiensComponent } from './liens/liens.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import { IntroComponent } from './home/intro/intro.component';
import { ServicesComponent } from './home/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TarifsComponent,
    ActivitesComponent,
    FormationsComponent,
    LiensComponent,
    BlogComponent,
    ContactComponent,
    IntroComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
