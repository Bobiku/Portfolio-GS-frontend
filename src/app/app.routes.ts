import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjetsListComponent } from './projets-list/projets-list.component';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'projets', component: ProjetsListComponent},
    { path: 'projets/:id', component: ProjetDetailComponent},
    { path: 'about', component: AboutMeComponent}
];
