import { Component, OnInit } from '@angular/core';
import { ProjetCardComponent } from '../../components/projet-card/projet-card.component';
import { Projet } from '../models/projet';
import { ProjetsService } from '../services/projets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import { ProjectsStore } from '../../core/store/projects/projects.store';

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

  constructor(
    private projetsService: ProjetsService,
    private route: ActivatedRoute,
    private router: Router,
    private projectsStore: ProjectsStore
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projetId = params['id'];
      this.loadProjectData(projetId);
    });
  }

  private loadProjectData(projetId: string): void {
    this.projetsService.getProjets().subscribe({
      next: (data) => {
        this.projets = data;
        this.projet = this.projets?.find((projet) => projet.id === projetId);
        if (this.projet) {
          this.getPreviousAndNextProjects();
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de la page :', err);
      },
    });
  }

  getPreviousAndNextProjects() {
    if (!this.projets || !this.projet) {
      return;
    }

    const currentIndex = this.projets.findIndex((projet) => projet.id === this.projet?.id);
    
    this.previousProjet = currentIndex === 0 
      ? this.projets[this.projets.length - 1] 
      : this.projets[currentIndex - 1];

    this.nextProjet = currentIndex === this.projets.length - 1 
      ? this.projets[0] 
      : this.projets[currentIndex + 1];
  }

  navigateToProject(projetId: string): void {
    this.router.navigate(['/projets/', projetId]);
  }

}