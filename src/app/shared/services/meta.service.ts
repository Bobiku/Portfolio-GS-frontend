import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MetaTags } from '../interfaces/meta-tags.interface';

@Injectable({
    providedIn: 'root'
})
export class MetaService {
    constructor(private meta: Meta) {}

    setMetaTags(metaTags: MetaTags) {
        this.meta.updateTag({ name: 'title', content: metaTags.title });
        this.meta.updateTag({ name: 'description', content: metaTags.description });
        if (metaTags.image) {
            this.meta.updateTag({ property: 'og:image', content: metaTags.image });
        }
        if (metaTags.type) {
            this.meta.updateTag({ property: 'og:type', content: metaTags.type });
        }
    }
}