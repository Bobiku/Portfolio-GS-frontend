import { Component, OnInit, SecurityContext } from '@angular/core';
import { ProjetsService } from '../services/projets.service';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../models/projet';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjetOthersComponent } from "../projet-others/projet-others.component";

@Component({
  selector: 'app-projet-detail',
  standalone: true,
  imports: [ProjetOthersComponent],
  templateUrl: './projet-detail.component.html',
  styleUrl: './projet-detail.component.scss'
})
export class ProjetDetailComponent implements OnInit {
  projet!: Projet;

  htmlContent!: any;

  constructor(private projetsService: ProjetsService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      const projetId = this.route.snapshot.params['id'];
      this.projet = this.projetsService.getFaceSnapById(projetId);

      this.htmlContent = this.sanitizer.sanitize(SecurityContext.NONE, this.projet.content);
  }
}
