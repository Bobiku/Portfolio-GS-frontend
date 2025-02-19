import { Component, Input } from '@angular/core';
import { Projet } from '../../projets/models/projet';
import { Router } from '@angular/router';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
    selector: 'app-projet-card',
    imports: [LucideAngularModule],
    templateUrl: './projet-card.component.html',
    styleUrl: './projet-card.component.scss'
})
export class ProjetCardComponent{
  @Input() projet!: Projet;
  @Input() typeProjetCard: 'generic' | 'previousProjet' | 'nextProjet' = 'generic';

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight; 

  constructor(private router: Router) {}

  navigateToProject(projetId: string): void {
    this.router.navigate(['/projets/', projetId]);
  }
} 