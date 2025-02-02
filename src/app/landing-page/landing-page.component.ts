import { Component } from '@angular/core';
import { ProjetsListComponent } from "../projets/projets-list/projets-list.component";
import { ButtonComponent } from "../components/button/button.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ ProjetsListComponent, ButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}