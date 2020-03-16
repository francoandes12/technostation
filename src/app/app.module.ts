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

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    AboutComponent,
    SetsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
