import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favouriteCars';

  getFavorites(): any[] {
    if (typeof window !== 'undefined' && window.localStorage) {
      const favs = localStorage.getItem(this.storageKey);
      return favs ? JSON.parse(favs) : [];
    }
    return [];
  }

  addFavorite(car: any): void {
    const favs = this.getFavorites();
    const exists = favs.find(item => item.id === car.id);
    
    if (!exists) {
      favs.push(car);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(this.storageKey, JSON.stringify(favs));
      }
    }
  }

  removeFavorite(carId: number): void {
    let favs = this.getFavorites();
    favs = favs.filter(item => item.id !== carId);
    
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.storageKey, JSON.stringify(favs));
    }
  }
}