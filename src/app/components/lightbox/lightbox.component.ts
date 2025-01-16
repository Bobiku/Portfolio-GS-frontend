import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent {
  readonly X = X;
  @Input() imageSrc: string | null = null;
  isVisible: boolean = false;

  openLightbox(image: string) {
    this.imageSrc = image;
    this.isVisible = true;
    this.disablePageScroll(); // Désactive le scroll
  }

  closeLightbox() {
    this.isVisible = false;
    this.enablePageScroll(); // Réactive le scroll
  }

  private disablePageScroll() {
    document.body.style.overflow = 'hidden'; // Empêche le défilement
  }

  private enablePageScroll() {
    document.body.style.overflow = ''; // Réinitialise le style (permet le défilement)
  }
}
