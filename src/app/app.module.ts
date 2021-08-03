import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ControlsComponent } from './home/controls/controls.component';
import { WhyComponent } from './home/why/why.component';
import { ConsultCoordinationComponent } from './home/consult-coordination/consult-coordination.component';
import { FooterComponent } from './footer/footer.component';
import { RenseignementsComponent } from './tarifs/renseignements/renseignements.component';
import { CoordonneesComponent } from './tarifs/coordonnees/coordonnees.component';
import { DisponibilitesComponent } from './tarifs/disponibilites/disponibilites.component';

import { ConnectionService } from './connection.service';
import { ControlesComponent } from './activites/controles/controles.component';
import { ConsultanceComponent } from './activites/consultance/consultance.component';
import { CoordinationComponent } from './activites/coordination/coordination.component';

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
    ControlsComponent,
    WhyComponent,
    ConsultCoordinationComponent,
    FooterComponent,
    RenseignementsComponent,
    CoordonneesComponent,
    DisponibilitesComponent,
    ControlesComponent,
    ConsultanceComponent,
    CoordinationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
