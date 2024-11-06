import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjetsListComponent } from "../projets-list/projets-list.component";
import { ContactComponent } from "../contact/contact.component";
import { Brush, Code, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, ProjetsListComponent, ContactComponent, LucideAngularModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  readonly Brush = Brush;
  readonly Code = Code
}
