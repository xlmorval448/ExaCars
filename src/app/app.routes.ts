import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'favourites', component: FavoritosComponent },
    { path: 'contact', component: ContactoComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];