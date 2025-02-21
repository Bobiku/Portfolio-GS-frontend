import { Component } from '@angular/core';
import { Brush, CalendarRange, Code, DraftingCompass, FileUser, LucideAngularModule, Microscope, Mouse, Network } from 'lucide-angular';
import { ButtonComponent } from "../components/button/button.component";
import { OptimizedImageComponent } from "../shared/components/optimized-image/optimized-image.component";
import { ProfileImageDirective } from "../shared/directives/profile-image.directive";
import { Projet } from '../projets/models/projet';
import { MetaService } from '../shared/services/meta.service';

@Component({
    selector: 'app-about-me',
    imports: [
        LucideAngularModule, 
        ButtonComponent, 
        OptimizedImageComponent,
        ProfileImageDirective
    ],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  readonly Brush = Brush;
  readonly Code = Code;
  readonly Microscope = Microscope;
  readonly DraftingCompass = DraftingCompass;
  readonly CalendarRange = CalendarRange;
  readonly Mouse = Mouse;
  readonly FileUser = FileUser;
  readonly Network = Network;

  projet?: Projet;

    constructor(private metaService: MetaService) {}

    ngOnInit(): void {
        // Récupérez votre projet ici
        this.setMetaTags();
    }

    setMetaTags() {
      const metaTags = {
          title: "Portfolio Guillaume Savary - À propos de moi",
          description: "Venez découvrir mon parcours et mes compétences",
      };
      this.metaService.setMetaTags(metaTags);
    }
}
