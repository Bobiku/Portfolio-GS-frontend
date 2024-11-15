import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { Brush, CalendarRange, Code, DraftingCompass, FileUser, LucideAngularModule, Microscope, Mouse } from 'lucide-angular';
import { ButtonComponent } from "../components/button/button.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ContactComponent, LucideAngularModule, ButtonComponent],
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
}
