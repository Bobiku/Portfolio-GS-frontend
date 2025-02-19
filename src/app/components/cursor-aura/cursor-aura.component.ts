import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-cursor-aura',
    imports: [CommonModule],
    templateUrl: './cursor-aura.component.html',
    styleUrl: './cursor-aura.component.scss',
    animations: [
        trigger('auraAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(0.5)' }),
                animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
            ]),
            transition(':leave', [
                animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.1)' }))
            ])
        ])
    ]
})
export class CursorAuraComponent {
  
  auraX = 0;
  auraY = 0;

  // Suivre le curseur sur la page
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.auraX = event.clientX;
    this.auraY = event.clientY;
  }

}
