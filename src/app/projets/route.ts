import { Routes } from '@angular/router';
import { ProjetsListComponent } from './projets-list/projets-list.component';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';

export const PROJETS_ROUTES: Routes = [
    { path: '', component: ProjetsListComponent },
    { path: ':id', component: ProjetDetailComponent }
];