import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Briefcase, House, LucideAngularModule, Send } from 'lucide-angular';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive, LucideAngularModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly House = House;
  readonly Briefcase = Briefcase;
  readonly Send = Send;
}
