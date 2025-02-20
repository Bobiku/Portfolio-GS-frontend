import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    private cache = new Map<string, any>();
    private readonly DEFAULT_TTL = 3600000; // 1 heure en millisecondes

    get<T>(key: string): T | null {
        const item = this.cache.get(key);
        if (!item) return null;

        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null;
        }

        return item.value;
    }

    set(key: string, value: any, ttl: number = this.DEFAULT_TTL): void {
        const expiry = Date.now() + ttl;
        this.cache.set(key, { value, expiry });
    }

    clear(key?: string): void {
        if (key) {
            this.cache.delete(key);
        } else {
            this.cache.clear();
        }
    }

    // Utilitaire pour wrapper les observables
    cacheRequest<T>(key: string, request: Observable<T>, ttl?: number): Observable<T> {
        const cached = this.get<T>(key);
        if (cached) return of(cached);

        return request.pipe(
            tap(response => this.set(key, response, ttl))
        );
    }
} 