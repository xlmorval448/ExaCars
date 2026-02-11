import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'favourites', component: FavoritosComponent },
    { path: 'contact', component: ContactoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];