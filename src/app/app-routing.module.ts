import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ActivitesComponent } from './activites/activites.component';
import { FormationsComponent } from './formations/formations.component';
import { LiensComponent } from './liens/liens.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'tarifs', component: TarifsComponent },
  { path: 'activites', component: ActivitesComponent},
  { path: 'formations', component: FormationsComponent},
  { path: 'liens', component: LiensComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
