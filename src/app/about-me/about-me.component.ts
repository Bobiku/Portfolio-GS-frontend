import { Component } from '@angular/core';
import { Brush, CalendarRange, Code, DraftingCompass, FileUser, LucideAngularModule, Microscope, Mouse, Network } from 'lucide-angular';
import { ButtonComponent } from "../components/button/button.component";
import { OptimizedImageComponent } from "../shared/components/optimized-image/optimized-image.component";
import { ProfileImageDirective } from "../shared/directives/profile-image.directive";

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
}
