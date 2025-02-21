import { Component } from '@angular/core';
import { ProjetsListComponent } from "../projets/projets-list/projets-list.component";
import { ButtonComponent } from "../components/button/button.component";
import { OptimizedImageComponent } from "../shared/components/optimized-image/optimized-image.component";
import { HeroImageDirective } from "../shared/directives/hero-image.directive";

@Component({
    selector: 'app-landing-page',
    imports: [
        ProjetsListComponent, 
        ButtonComponent,
        OptimizedImageComponent,
        HeroImageDirective
    ],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}