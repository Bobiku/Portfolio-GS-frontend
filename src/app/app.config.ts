import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Revenir en haut de page à chaque navigation
        anchorScrolling: 'enabled'            // Gérer les ancres
      })
    ), {
      provide: LOCALE_ID, useValue: 'fr-FR',
    },
    provideAnimations()
  ]
};
