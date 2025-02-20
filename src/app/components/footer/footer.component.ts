import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, FileUser, Mail, Linkedin } from 'lucide-angular';

@Component({
    selector: 'app-footer',
    imports: [LucideAngularModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
    readonly Linkedin = Linkedin;
    readonly FileUser = FileUser;
    readonly Mail = Mail;

    startYear = 2024;
    currentYear!: number;

    ngOnInit() {
        this.currentYear = new Date().getFullYear();
    }

    get copyrightYears(): string {
        return this.currentYear > this.startYear 
            ? `${this.startYear}-${this.currentYear}`
            : this.startYear.toString();
    }
}
