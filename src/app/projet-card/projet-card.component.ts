import { Component, Input, OnInit } from '@angular/core';
import { Projet } from '../models/projet';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projet-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projet-card.component.html',
  styleUrl: './projet-card.component.scss'
})
export class ProjetCardComponent implements OnInit{
  @Input() projet!: Projet;

  projetDetailUrl!: string;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
      this.projetDetailUrl = '/projets/'+this.projet.id;
  }
}
