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
import { TextSegment } from '../models/formatted-block.interface';
import { FormattedTextComponent } from "../../components/formatted-text/formatted-text.component";
import { OptimizedImageComponent } from "../../shared/components/optimized-image/optimized-image.component";
import { MetaService } from '../../shared/services/meta.service';

@Component({
    selector: 'app-projet-detail',
    imports: [LucideAngularModule, CommonModule, NotFoundComponent, LightboxComponent, ProjetOthersComponent, TopScrollButtonComponent, FormattedTextComponent, OptimizedImageComponent],
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
              private router: Router,
              private metaService: MetaService) {}

  ngOnInit(): void {
    // Écouter les changements de paramètres de route
    this.route.params.subscribe(params => {
      const projetId = params['id'];
      this.loadProjectData(projetId);
      this.setMetaTags();
    });
  }

  setMetaTags() {
    if (this.projet) {
        const metaTags = {
            title: this.projet.title,
            description: this.projet.description,
            image: this.projet.imageBannerUrl
        };
        this.metaService.setMetaTags(metaTags);
    }
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

  private formatBlocksForLists(blocks: { type: string; content: string | TextSegment[] }[]): FormattedBlock[] {
    const formattedBlocks: FormattedBlock[] = [];
    let currentList: { type: string; content: (string | TextSegment[])[] } | null = null;

    blocks.forEach((block) => {
      if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item' || block.type === 'image') {
        if (!currentList || currentList.type !== block.type) {
          if (currentList) {
            formattedBlocks.push(currentList);
          }
          currentList = { type: block.type, content: [] };
        }
        currentList.content.push(block.content);
      } else {
        if (currentList) {
          formattedBlocks.push(currentList);
          currentList = null;
        }
        formattedBlocks.push(block);
      }
    });

    if (currentList) {
      formattedBlocks.push(currentList);
    }

    return formattedBlocks;
  }

  openImage(imageSrc: string | TextSegment[] | (string | TextSegment[])[]): void {
    if (typeof imageSrc === 'string') {
      this.lightbox.openLightbox(imageSrc);
    } else if (Array.isArray(imageSrc)) {
      const firstItem = imageSrc[0];
      if (typeof firstItem === 'string') {
        this.lightbox.openLightbox(firstItem);
      } else if (Array.isArray(firstItem)) {
        this.lightbox.openLightbox(firstItem[0].plain_text);
      } else {
        this.lightbox.openLightbox(firstItem.plain_text);
      }
    }
  }

  // Méthode pour naviguer vers un autre projet
  navigateToProject(projetId: string): void {
    this.router.navigate(['/projets/', projetId]);
  }

  isArray(value: any): value is TextSegment[] {
    return Array.isArray(value);
  }

  isIterable(value: any): value is (string | TextSegment[])[] {
    return Array.isArray(value);
  }
}