
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent } from './components/about/about.component';
import { SetsComponent } from './components/sets/sets.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { HomeComponent } from './components/home/home.component';
import { BestOfComponent } from './components/best-of/best-of.component'

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'tracks', component: TracksComponent},
    {path: 'sets', component: SetsComponent},
    {path: 'bestOf', component: BestOfComponent},
    {path: '**', redirectTo: '/'},
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
