import { Component, input, InputSignal, OnInit } from '@angular/core';
import { Projet } from '../../models/projet';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projet-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projet-card.component.html',
  styleUrl: './projet-card.component.scss'
})
export class ProjetCardComponent implements OnInit{
  projet: InputSignal<Projet> = input.required();

  projetDetailUrl!: string;
  
  constructor() {}

  ngOnInit(): void {
      this.projetDetailUrl = '/projets/'+this.projet().urlProjet;
  }
} 