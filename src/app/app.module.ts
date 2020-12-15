import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { AboutComponent } from './components/about/about.component';
import { SetsComponent } from './components/sets/sets.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BestOfComponent } from './components/best-of/best-of.component';
import { AndesComponent } from './components/andes/andes.component';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    AboutComponent,
    SetsComponent,
    HomeComponent,
    BestOfComponent,
    AndesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NoopAnimationsModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
