import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, shareReplay, throwError, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CacheService } from '../../core/services/cache.service';
import { Projet } from "../models/projet";
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
        // Vérifier d'abord le store
        const currentState = this.projectsStore.projects$;
        
        return this.cacheService.cacheRequest(
            `${this.baseUrl}/api/notion/page/`,
            this.http.get<Projet[]>(`${this.baseUrl}/api/notion/page/`),
            3600000
        ).pipe(
            tap(projects => this.projectsStore.setState({ projects }))
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