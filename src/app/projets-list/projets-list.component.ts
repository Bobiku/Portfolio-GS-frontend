import { Component } from '@angular/core';
import { ProjetCardComponent } from "../projet-card/projet-card.component";

@Component({
  selector: 'app-projets-list',
  standalone: true,
  imports: [ProjetCardComponent],
  templateUrl: './projets-list.component.html',
  styleUrl: './projets-list.component.scss'
})
export class ProjetsListComponent {

}
