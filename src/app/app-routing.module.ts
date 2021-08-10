import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ActivitesComponent } from './activites/activites.component';
import { ControlesComponent } from './activites/controles/controles.component';
import { ConsultanceComponent } from './activites/consultance/consultance.component';
import { CoordinationComponent } from './activites/coordination/coordination.component';
import { FormationsComponent } from './formations/formations.component';
import { LiensComponent } from './liens/liens.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: {animationState: 'One'} },
  { path: 'tarifs', component: TarifsComponent, data: {animationState: 'Two'} },
  {
    path: 'activites', component: ActivitesComponent, data: {animationState: 'Three'},
    children: [
      {
        path: 'controles', 
        component: ControlesComponent, 
      },
      {
        path: 'consultance',
        component: ConsultanceComponent, 
      },
      {
        path: 'coordination',
        component: CoordinationComponent,
      }
    ]
  },
  { path: 'formations', component: FormationsComponent, data: {animationState: 'Four'} },
  { path: 'liens', component: LiensComponent, data: {animationState: 'Five'} },
  { path: 'blog', component: BlogComponent, data: {animationState: 'Six'} },
  { path: 'contact', component: ContactComponent, data: {animationState: 'Seven'} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
