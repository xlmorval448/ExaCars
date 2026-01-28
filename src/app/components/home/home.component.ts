import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Car, CarService } from '../../services/car.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
}