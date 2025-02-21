import { Directive, ElementRef, OnInit } from '@angular/core';
import { OptimizedImageComponent } from '../components/optimized-image/optimized-image.component';

@Directive({
    selector: '[appHeroImage]',
    standalone: true
})
export class HeroImageDirective implements OnInit {
    constructor(
        private el: ElementRef,
        private optimizedImage: OptimizedImageComponent
    ) {}

    ngOnInit() {
        const container = this.el.nativeElement.querySelector('.image-container');
        if (container) {
            container.style.maxWidth = '344px';
            this.optimizedImage.transform = 'scaleX(-1)';
            this.optimizedImage.objectFit = 'cover';
            this.optimizedImage.objectPosition = 'center';
        }
    }
} 