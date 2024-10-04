import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../services/projets.service';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../models/projet';

@Component({
  selector: 'app-projet-detail',
  standalone: true,
  imports: [],
  templateUrl: './projet-detail.component.html',
  styleUrl: './projet-detail.component.scss'
})
export class ProjetDetailComponent implements OnInit {
  projet!: Projet;

  constructor(private projetsService: ProjetsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
      const projetId = this.route.snapshot.params['id'];
      this.projet = this.projetsService.getFaceSnapById(projetId);
  }
}
