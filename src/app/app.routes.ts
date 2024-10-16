import { Routes } from '@angular/router';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { NotFoundPageComponent } from './screens/not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: '**', component: NotFoundPageComponent }
];
