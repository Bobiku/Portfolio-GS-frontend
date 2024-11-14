import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { ButtonComponent } from '../components/button/button.component';
import { Brush, CalendarRange, Code, DraftingCompass, LucideAngularModule, Microscope, Mouse } from 'lucide-angular';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ContactComponent, ButtonComponent, LucideAngularModule],
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
}
