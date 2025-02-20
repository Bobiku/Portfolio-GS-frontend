import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { ProjetsService } from './app/projets/services/projets.service';
import { environment } from './environments/environment';
import { inject, ApplicationRef, EnvironmentInjector } from '@angular/core';

registerLocaleData(fr.default);

let appRef: ApplicationRef;
let environmentInjector: EnvironmentInjector;

bootstrapApplication(AppComponent, appConfig)
  .then(ref => {
    appRef = ref;
    environmentInjector = ref.injector;
  })
  .catch((err) => console.error(err));

(window as any).clearFrontendCache = () => {
    if (environmentInjector) {
        return environmentInjector.runInContext<void>(() => {
            const service = inject(ProjetsService);
            return service.clearCache();
        });
    }
    console.error('Application not yet initialized');
};

(window as any).clearBackendCache = async () => {
    try {
        const response = await fetch(`${environment.backEndUrl}/api/cache/clear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result.message);
    } catch (error) {
        console.error('Error clearing backend cache:', error);
    }
};