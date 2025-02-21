import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CacheService } from '../../core/services/cache.service';
import { Projet } from '../models/projet';
import { ProjectsStore } from '../../core/store/projects/projects.store';

@Injectable({
    providedIn: 'root'
})

export class ProjetsService {

    private baseUrl = environment.backEndUrl;
    private projectsStore = inject(ProjectsStore);

    constructor(
        private http: HttpClient,
        private cacheService: CacheService
    ) {}

    getProjets(): Observable<Projet[]> {
        return this.cacheService.cacheRequest(
            `${this.baseUrl}/api/notion/page/`,
            this.http.get<Projet[]>(`${this.baseUrl}/api/notion/page/`)
        ).pipe(
            tap(projects => this.projectsStore.setState({ projects })),
            catchError(error => {
                console.error('Error fetching projects:', error);
                this.projectsStore.setState({ 
                    error: 'Impossible de charger les projets. Veuillez réessayer plus tard.'
                });
                return throwError(() => error);
            })
        );
    }

    getBlocksById(projetId: string): Observable<any> {
        const url = `${this.baseUrl}/api/notion/page/${projetId}`;
        return this.cacheService.cacheRequest(
            url,
            this.http.get(url)
        );
    }

    clearCache(): void {
        this.cacheService.clear();
    }

}