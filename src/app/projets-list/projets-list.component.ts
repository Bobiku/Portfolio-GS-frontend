import { Component, OnInit } from '@angular/core';
import { ProjetCardComponent } from "../projet-card/projet-card.component";
import { Projet } from '../models/projet';
import { ProjetsService } from '../services/projets.service';

@Component({
  selector: 'app-projets-list',
  standalone: true,
  imports: [ProjetCardComponent],
  templateUrl: './projets-list.component.html',
  styleUrl: './projets-list.component.scss'
})
export class ProjetsListComponent implements OnInit {

  projets!: Projet[];

  constructor (private projetsService: ProjetsService) {}

  ngOnInit(): void {
      this.projets = this.projetsService.getProjets();
  }

}
