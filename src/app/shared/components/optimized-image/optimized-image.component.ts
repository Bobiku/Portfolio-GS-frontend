import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-optimized-image',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './optimized-image.component.html',
    styleUrls: ['./optimized-image.component.scss']
})
export class OptimizedImageComponent {
    @Input() src!: string;
    @Input() alt!: string;
    @Input() width?: number;
    @Input() height?: number;
    @Input() priority = false;
    @Input() objectFit: 'cover' | 'contain' | 'fill' = 'cover';
    @Input() objectPosition = 'center';
    @Input() transform?: string;
    @Input() maxWidth?: string;

    imageLoaded = false;
    imageError = false;

    onImageLoad() {
        this.imageLoaded = true;
    }

    onImageError() {
        this.imageError = true;
        this.imageLoaded = true;
    }
} 