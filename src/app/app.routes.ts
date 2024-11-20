import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjetsListComponent } from './projets/projets-list/projets-list.component';
import { ProjetDetailComponent } from './projets/projet-detail/projet-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'projets',  
        loadChildren: () => import('./projets/route')
        .then(m => m.PROJETS_ROUTES) },
    { path: 'about', component: AboutMeComponent},
    { path: '**', component: NotFoundComponent }
];
