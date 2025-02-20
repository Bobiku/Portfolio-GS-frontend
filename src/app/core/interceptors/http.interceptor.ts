import { HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { catchError, finalize, timeout } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export const globalHttpInterceptor: HttpInterceptorFn = (req, next) => {
    const startTime = Date.now();
    
    const clonedRequest = req.clone({
        headers: req.headers
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache')
            .set('Pragma', 'no-cache')
    });

    if (!environment.production) {
        console.log(`🌐 HTTP ${req.method} to ${req.url}`);
    }

    return next(clonedRequest).pipe(
        timeout(30000),
        catchError(error => {
            const message = error.status === 404 ? 'Resource not found' : 'Server error';
            console.error('🔴 HTTP Error:', error);
            throw new Error(message);
        }),
        finalize(() => {
            if (!environment.production) {
                console.log(`✨ Request took ${Date.now() - startTime}ms`);
            }
        })
    );
}; 