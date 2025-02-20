import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, shareReplay, throwError, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ProjetsService {

    private baseUrl = environment.backEndUrl;
    private cache = new Map<string, any>();

    constructor(private http: HttpClient) {}

    private logCacheState(message: string) {
        console.log('=== Frontend Cache State ===');
        console.log(message);
        console.log('Cache keys:', Array.from(this.cache.keys()));
        console.log('Cache size:', this.cache.size);
        console.log('Cache content:', Object.fromEntries(this.cache));
        console.log('================');
    }
    

    getProjets(): Observable<any> {
        const url = `${this.baseUrl}/api/notion/page/`;
        
        if (this.cache.has(url)) {
            return of(this.cache.get(url));
        }

        return this.http.get(url).pipe(
            tap(data => {
                this.cache.set(url, data);
            }),
            catchError(error => {
                this.cache.delete(url);
                return of(error);
            })
        );
    }

    getBlocksById(projetId: string): Observable<any> {
        const url = `${this.baseUrl}/api/notion/page/${projetId}`;
        // this.logCacheState('Before getBlocksById');

        if (this.cache.has(url)) {
            // console.log('Using cached data for:', url);
            return of(this.cache.get(url));
        }

        return this.http.get(url).pipe(
            tap(data => {
                // console.log('Received data:', data);
                this.cache.set(url, data);
                // this.logCacheState('After caching in getBlocksById');
            }),
            catchError((error: HttpErrorResponse) => {
                // console.error('Error in getBlocksById:', error);
                this.cache.delete(url);
                if (error.status === 404) {
                    return throwError(() => new Error('PAGE_NOT_FOUND'));
                }
                return throwError(() => new Error(error.message));
            })
        );
    }

    clearCache(): void {
        this.cache.clear();
        
        const url = `${this.baseUrl}/api/notion/page/`;
        this.http.get(url).subscribe();
    }

}