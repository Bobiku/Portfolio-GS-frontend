import { Component } from '@angular/core';
import { ProjetCardComponent } from '../../components/projet-card/projet-card.component';
import { Projet } from '../models/projet';
import { ProjetsService } from '../services/projets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet-others',
  standalone: true,
  imports: [ProjetCardComponent],
  templateUrl: './projet-others.component.html',
  styleUrl: './projet-others.component.scss'
})
export class ProjetOthersComponent {

  othersProjets!: Projet[];
  projet!: Projet;

  constructor(private projetsService: ProjetsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProjet();
    this.othersProjets = this.projetsService.getProjets();
  }

  getProjet() {
    const projetId = this.route.snapshot.params['id'];
    this.projet = this.projetsService.getProjetById(projetId);
  }
}
