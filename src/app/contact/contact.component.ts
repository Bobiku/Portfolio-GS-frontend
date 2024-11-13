import { Component } from '@angular/core';
import { LucideAngularModule, FileUser, Mail, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly Linkedin = Linkedin;
  readonly FileUser = FileUser;
  readonly Mail = Mail;
}
