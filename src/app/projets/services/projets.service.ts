import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, shareReplay, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ProjetsService {

    private baseUrl = environment.backEndUrl;
    private cache = new Map<string, Observable<any>>();

    constructor(private http: HttpClient) {}


    getProjets(): Observable<any> {
        const url = `${this.baseUrl}/api/notion/page/`;
        if (this.cache.has(url)) {
            return this.cache.get(url) as Observable<any>;
        }

        const request = this.http.get(url).pipe(
            shareReplay(1),
            catchError(error => {
                this.cache.delete(url);
                return of(error);
            })
        );

        this.cache.set(url, request);
        return request;
    }

    getBlocksById(projetId: string): Observable<any> {
        const url = `${this.baseUrl}/api/notion/page/${projetId}`;

        // Vérifier si les données sont déjà mises en cache
        if (this.cache.has(url)) {
            return this.cache.get(url) as Observable<any>;
        }

       // Si les données ne sont pas en cache, faire la requête
        const request = this.http.get(url).pipe(
            shareReplay(1), // Partager la même requête entre plusieurs abonnés
            catchError((error: HttpErrorResponse) => {
            // Supprimer la requête du cache en cas d'erreur
            this.cache.delete(url);
    
            if (error.status === 404) {
                // Lancer une erreur spécifique pour que le composant gère l'affichage de la page 404
                return throwError(() => new Error('PAGE_NOT_FOUND'));
            }
    
            // Renvoyer une erreur observable
            return throwError(() => new Error(error.message));
            })
        );

        this.cache.set(url, request);
        return request;
    }

}