import { Component, Input, input, InputSignal, OnInit } from '@angular/core';
import { Projet } from '../../projets/models/projet';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projet-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projet-card.component.html',
  styleUrl: './projet-card.component.scss'
})
export class ProjetCardComponent{
  @Input() projet!: Projet;

  constructor(private router: Router) {}

  navigateToProject(projetId: string): void {
    this.router.navigate(['/projets/', projetId]);
  }
} 