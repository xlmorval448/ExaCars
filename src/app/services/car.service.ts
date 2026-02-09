import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  hp: number;
  year: number;
  image: string;
  country: string;
  type: string;
  transmission: string;
  drivetrain: string;
  torque: number;
  top_speed: number;
  acceleration: number;
  mass: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'https://api.npoint.io/3fa9910245a279be5709'; 

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.cars)
    );
  }
}