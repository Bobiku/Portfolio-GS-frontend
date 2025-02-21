import { Component, Input, OnInit } from '@angular/core';
import { Projet } from '../../projets/models/projet';
import { Router } from '@angular/router';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import { ImageService } from '../../shared/services/image.service';

@Component({
    selector: 'app-projet-card',
    imports: [LucideAngularModule],
    templateUrl: './projet-card.component.html',
    styleUrl: './projet-card.component.scss'
})
export class ProjetCardComponent {
  @Input() projet!: Projet;
  @Input() typeProjetCard: 'generic' | 'previousProjet' | 'nextProjet' = 'generic';

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight; 

  imageLoaded = false;
  imageError = false;

  constructor(private router: Router, private imageService: ImageService) {}


  navigateToProject(projetId: string): void {
    this.router.navigate(['/projets/', projetId]);
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError() {
    this.imageError = true;
    this.imageLoaded = true; // Pour masquer le skeleton
  }

  getOptimizedImageUrl(): {src: string, srcset: string} {
    return this.imageService.getResponsiveImageUrl(this.projet.imageBannerUrl);
  }
} 