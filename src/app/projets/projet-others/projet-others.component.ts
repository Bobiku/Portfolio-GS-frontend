import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjetCardComponent } from '../../components/projet-card/projet-card.component';
import { Projet } from '../models/projet';
import { ProjetsService } from '../services/projets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
    selector: 'app-projet-others',
    imports: [ProjetCardComponent, CommonModule, LucideAngularModule],
    templateUrl: './projet-others.component.html',
    styleUrl: './projet-others.component.scss'
})
export class ProjetOthersComponent implements OnInit {

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  projet?: Projet;

  projets!: Projet[];
  previousProjet!: Projet | null;
  nextProjet!: Projet | null;

  constructor(private projetsService: ProjetsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {

    // Écouter les changements de paramètres de route
    this.route.params.subscribe(params => {
      const projetId = params['id'];
      this.loadProjectData(projetId);
    });
    

    // Debug
    // console.log('List of Projects:', this.projets);
    // console.log('Previous Project:', this.previousProjet);
    // console.log('Current Project:', this.projet);
    // console.log('Next Project:', this.nextProjet);
  }

  private loadProjectData(projetId: string): void {
  
    // Obtenir la liste des projets et le projet actuel
    this.projetsService.getProjets().subscribe({
      next: (data) => {
        this.getProjetById(projetId, data);
        // console.log('List of Projects:', this.projets);
        // console.log('Projet actuel:', this.projet);
  
        // Obtenir les projets précédents et suivants après avoir récupéré les projets
        this.getPreviousAndNextProjects();
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de la page :', err);
      },
    });
  }

  private getProjetById(projetId: string, data: any) {
    this.projets = data;
    this.projet = this.projets?.find((projet) => projet.id === projetId);
    if (!this.projet) {
      console.error('Aucun projet trouvé avec cet ID :', projetId);
    }
  }

  getPreviousAndNextProjects() {
    if (!this.projets || !this.projet) {
        console.error('Les projets ou le projet actuel ne sont pas définis.');
        return;
    }

    const index = this.projets.findIndex((projet) => this.projet && projet.id === this.projet.id);
    const previousIndex = index - 1;
    const nextIndex = index + 1;

    if (previousIndex >= 0) {
        this.previousProjet = this.projets[previousIndex];
    } else {
      this.previousProjet = null; // Pas de projet précédent
    }

    if (nextIndex < this.projets.length) {
        this.nextProjet = this.projets[nextIndex];
    } else {
      this.nextProjet = null; // Pas de projet suivant
    }
  }

  // Méthode pour naviguer vers un autre projet
  navigateToProject(projetId: string): void {
    this.router.navigate(['/projets/', projetId]).then(() => {
      this.loadProjectData(projetId); // Recharger les données du projet après la navigation
    });
  }

}