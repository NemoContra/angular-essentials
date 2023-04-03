import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

const providers = [provideHttpClient()];

bootstrapApplication(AppComponent, { providers }).catch((err) =>
  console.error(err)
);
