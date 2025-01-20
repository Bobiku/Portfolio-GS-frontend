import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjetsService } from '../services/projets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../models/projet';
import { ExternalLink, CircleChevronUp, LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { FormattedBlock } from '../models/formatted-block.interface';
import { NotFoundComponent } from "../../not-found/not-found.component";
import { LightboxComponent } from "../../components/lightbox/lightbox.component";
import { ProjetOthersComponent } from "../projet-others/projet-others.component";
import { TopScrollButtonComponent } from "../../components/top-scroll-button/top-scroll-button.component";

@Component({
  selector: 'app-projet-detail',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, NotFoundComponent, LightboxComponent, ProjetOthersComponent, TopScrollButtonComponent],
  templateUrl: './projet-detail.component.html',
  styleUrl: './projet-detail.component.scss'
})
export class ProjetDetailComponent implements OnInit {

  readonly ExternalLink = ExternalLink;
  readonly CircleChevronUp = CircleChevronUp;

  projets?: Projet[];
  projet?: Projet;
  blocks: FormattedBlock[] = [];
  isNotFound: boolean = false;

  @ViewChild(LightboxComponent) lightbox!: LightboxComponent;

  constructor(private projetsService: ProjetsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {

    // Écouter les changements de paramètres de route
    this.route.params.subscribe(params => {
      const projetId = params['id'];
      this.loadProjectData(projetId);
    });
  }

  private loadProjectData(projetId: string): void {
    this.projetsService.getProjets().subscribe({
      next: (data) => {
        this.getProjetById(projetId, data);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de la page :', err);
      },
    });

    this.projetsService.getBlocksById(projetId).subscribe({
      next: (data) => {
        this.blocks = this.formatBlocksForLists(data);
        // console.log(this.blocks);
        if (!this.blocks || this.blocks.length === 0) {
          console.error('Aucun contenu trouvé pour cet ID :', projetId);
        }
      },
      error: (err) => {
        if (err.message === 'PAGE_NOT_FOUND') {
          this.isNotFound = true; // Afficher une page 404
        } else {
          console.error('Erreur lors du chargement des blocs:', err);
        }
      }
    });
  }

  private getProjetById(projetId: string, data: any) {
    this.projets = data;
    this.projet = this.projets?.find((projet) => projet.id === projetId);
    if (!this.projet) {
      console.error('Aucun projet trouvé avec cet ID :', projetId);
    }
  }

  private formatBlocksForLists(blocks: { type: string; content: string }[]): FormattedBlock[] {
    const formattedBlocks: any[] = [];
    let currentList: { type: string; items: string[] } | null = null;
  
    blocks.forEach((block) => {
      if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item' || block.type === 'image') {
        if (!currentList || currentList.type !== block.type) {
          // Nouvelle liste
          if (currentList) {
            formattedBlocks.push(currentList);
          }
          currentList = { type: block.type, items: [] };
        }
        currentList.items.push(block.content);
      } else {
        // Si on n'est pas dans une liste, fermer la liste en cours
        if (currentList) {
          formattedBlocks.push(currentList);
          currentList = null;
        }
        // Ajouter le bloc individuel
        formattedBlocks.push(block);
      }
    });
  
    // Ajouter la dernière liste en cours, s'il y en a une
    if (currentList) {
      formattedBlocks.push(currentList);
    }
  
    return formattedBlocks;
  }

  openImage(imageSrc: string) {
    this.lightbox.openLightbox(imageSrc);
  }

  // Méthode pour naviguer vers un autre projet
  navigateToProject(projetId: string): void {
    this.router.navigate(['/projets/', projetId]);
  }
  
}
