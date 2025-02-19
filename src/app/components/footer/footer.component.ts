import { Component } from '@angular/core';
import { LucideAngularModule, FileUser, Mail, Linkedin } from 'lucide-angular';

@Component({
    selector: 'app-footer',
    imports: [LucideAngularModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly Linkedin = Linkedin;
  readonly FileUser = FileUser;
  readonly Mail = Mail;
}
