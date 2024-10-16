import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjetsListComponent } from './projets-list/projets-list.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'projetsList', component: ProjetsListComponent},
    { path: 'projets/:id', component: ProjetDetailComponent},
    { path: 'contact', component: ContactComponent}
];
