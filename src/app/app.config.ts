import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { globalHttpInterceptor } from './core/interceptors/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Revenir en haut de page à chaque navigation
        anchorScrolling: 'disabled'            // Gérer les ancres
      })
    ), {
      provide: LOCALE_ID, useValue: 'fr-FR',
    },
    provideAnimations(),
    provideHttpClient(
      withInterceptors([globalHttpInterceptor])
    ),
  ]
};
