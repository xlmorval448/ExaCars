import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Car, CarService } from '../../services/car.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];
  brandFilter: string = '';
  countryFilter: string = '';
  yearFilter: number | null = null;
  minHpFilter: number = 0;
  maxHpFilter: number = 2000;

  constructor(
    private carService: CarService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  get brands(): string[] { return [...new Set(this.cars.map(c => c.brand))].sort(); }
  get countries(): string[] { return [...new Set(this.cars.map(c => c.country))].sort(); }
  get years(): number[] { return [...new Set(this.cars.map(c => c.year))].sort((a, b) => b - a); }

  get filteredCars(): Car[] {
    return this.cars.filter(c => {
      const brandMatch = this.brandFilter ? c.brand === this.brandFilter : true;
      const countryMatch = this.countryFilter ? c.country === this.countryFilter : true;
      const yearMatch = this.yearFilter ? c.year == this.yearFilter : true;

      const hpMatch = c.hp >= this.minHpFilter && c.hp <= this.maxHpFilter;

      return brandMatch && countryMatch && yearMatch && hpMatch;
    });
  }

  deleteFilters() {
    this.brandFilter = '';
    this.countryFilter = '';
    this.yearFilter = null;
    this.minHpFilter = 0;
    this.maxHpFilter = 2000;
  }

  addToFavs(car: Car) {
    this.favoritesService.addFavorite(car);
  }
}