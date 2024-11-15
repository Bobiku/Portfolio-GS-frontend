import { Router, RouterModule } from '@angular/router';
import { Component, ElementRef, HostListener, Inject, input, InputSignal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  url: InputSignal<string> = input.required();

  constructor(
    @Inject(DOCUMENT) private document: Document
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

  @HostListener('click')
  onClick() {
    const urlParts = this.url().split('#');
    if (urlParts.length > 1) {
      const fragment = urlParts[1];
      this.scrollToAnchor(fragment);
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

  getRouterLink(): any {
    const urlParts = this.url().split('#');
    if (urlParts.length > 1) {
      return {
        routerLink: `/${urlParts[0]}`,
        fragment: urlParts[1]
      };
    } else {
      return {
        routerLink: `/${this.url}`
      };
    }
  }

}
