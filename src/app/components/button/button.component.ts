import { Router, RouterModule } from '@angular/router';
import { Component, HostListener, Inject, Input } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-button',
    imports: [RouterModule, CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() url!: string;

  constructor(
    @Inject(DOCUMENT) protected document: Document,
    protected router: Router
  ) {}
  
  // Détecte si une URL est externe
  isExternalUrl(url: string): boolean {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.origin !== window.location.origin; // Externe si origine différente
    } catch {
      return false; // Si ce n'est pas une URL complète, on suppose qu'elle est interne
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.isExternalUrl(this.url)) {
      event.preventDefault(); // Empêche la navigation par défaut de l'application
      window.open(this.url, '_blank'); // Ouvre le lien dans un nouvel onglet
    } else {
      const urlParts = this.url.split('#');
      if (urlParts.length > 1) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const fragment = urlParts[1];
        this.router.navigate([], { fragment }).then(() => {
          this.scrollToAnchor(fragment);
        });
      } else {
        this.router.navigate([this.url]);
      }
    }
  }

  private scrollToAnchor(fragment: string) {
    setTimeout(() => {
      const element = this.document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}