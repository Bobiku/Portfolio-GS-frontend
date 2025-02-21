import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appProfileImage]',
    standalone: true
})
export class ProfileImageDirective implements OnInit {
    constructor(private el: ElementRef) {}

    ngOnInit() {
        const container = this.el.nativeElement.querySelector('.image-container');
        if (container) {
            container.style.borderRadius = '50%';
            container.style.border = '16px solid var(--primary)';
            container.style.width = '280px';
            container.style.height = '280px';
            container.style.overflow = 'hidden';
            
            const img = container.querySelector('img');
            if (img) {
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
            }
        }
    }
} 