import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjetsService } from '../services/projets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../models/projet';
import { ExternalLink, CircleChevronUp, LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { FormattedBlock, FormattedContent, ImageBlock } from '../models/formatted-block.interface';
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
            image: this.projet.imageBannerUrl['480']
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
        this.blocks = data;
        // this.blocks = this.formatBlocksForLists(data);
        console.log(data);
        console.log(this.blocks);
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

  // private formatBlocksForLists(blocks: FormattedBlock[]): FormattedBlock[] {
  //   const formattedBlocks: FormattedBlock[] = [];
  //   let currentList: { content: TextSegment[] }[] = [];

  //   blocks.forEach((block) => {
  //       if (block.type === 'bulleted_list_item') {
  //           if (Array.isArray(block.content)) {
  //               currentList.push({ content: block.content as TextSegment[] });
  //           }
  //       } else {
  //           if (currentList.length > 0) {
  //               formattedBlocks.push({ type: 'bullet', li: currentList });
  //               currentList = [];
  //           }
  //           formattedBlocks.push(block as FormattedBlock);
  //       }
  //   });

  //   if (currentList.length > 0) {
  //       formattedBlocks.push({ type: 'bullet', li: currentList });
  //   }

  //   return formattedBlocks;
  // }

  openImage(imageSrc: FormattedContent): void {
    if (Array.isArray(imageSrc)) {
      const firstItem = imageSrc[0];
      if (typeof firstItem === 'string') {
        this.lightbox.openLightbox(firstItem);
      } else if (firstItem && typeof firstItem === 'object' && 'plain_text' in firstItem) {
        this.lightbox.openLightbox(firstItem.plain_text);
      }
    } else if (typeof imageSrc === 'string') {
      this.lightbox.openLightbox(imageSrc);
    }
  }

  // Méthode pour naviguer vers un autre projet
  navigateToProject(projetId: string): void {
    this.router.navigate(['/projets/', projetId]);
  }

  isArray(value: any): value is TextSegment[] {
    return Array.isArray(value);
  }

  isIterable(value: any): value is (FormattedContent)[] {
    return Array.isArray(value);
  }

  getImageUrl(url: ImageBlock, size: string): string {
    return url[size] || url['original'];
  }
}