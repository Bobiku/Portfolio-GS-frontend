import { Component } from '@angular/core';
import { ProjetsListComponent } from "../projets-list/projets-list.component";
import { ContactComponent } from "../contact/contact.component";
import { LucideAngularModule, Microscope, Brush, Code, DraftingCompass, CalendarRange, Mouse } from 'lucide-angular';
import { ButtonComponent } from "../components/button/button.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ ProjetsListComponent, ContactComponent, LucideAngularModule, ButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  readonly Brush = Brush;
  readonly Code = Code;
  readonly Microscope = Microscope;
  readonly DraftingCompass = DraftingCompass;
  readonly CalendarRange = CalendarRange;
  readonly Mouse = Mouse;
}