import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    getOptimizedImageUrl(path: string): string {
        // Vérifier si le navigateur supporte WebP
        if (this.supportsWebP()) {
            return path.replace(/\.(jpg|jpeg|png)$/, '.webp');
        }
        return path;
    }

    getResponsiveImageUrl(url: string): {src: string, srcset: string} {
        // Vérifier si c'est une URL Notion
        if (url.includes('notion.so')) {
            return {
                src: url,
                srcset: `
                    ${url}&width=300 300w,
                    ${url}&width=600 600w,
                    ${url}&width=900 900w
                `.trim()
            };
        }
        
        // Pour les images locales
        return {
            src: url,
            srcset: url
        };
    }

    private supportsWebP(): boolean {
        const canvas = document.createElement('canvas');
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
} 