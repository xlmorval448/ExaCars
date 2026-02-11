import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html'
})
export class FavoritosComponent implements OnInit {
  favoriteCars: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoriteCars = this.favoritesService.getFavorites();
  }

  removeFromFavs(carId: number) {
    this.favoritesService.removeFavorite(carId);
    this.loadFavorites();
  }
}