import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjetsListComponent } from './projets-list/projets-list.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'projets', component: ProjetsListComponent}
];
