import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appFunfactImage]',
    standalone: true
})
export class FunfactImageDirective implements OnInit {
    constructor(private el: ElementRef) {}

    ngOnInit() {
        const container = this.el.nativeElement.querySelector('.image-container');
        if (container) {
            container.style.width = '100%';
            container.style.aspectRatio = '16/9';
            
            const img = container.querySelector('img');
            if (img) {
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.objectPosition = 'center';
            }
        }
    }
} 