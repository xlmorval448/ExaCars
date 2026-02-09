import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Car, CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  coches: Car[] = [];
  
  filtroMarca: string = '';
  filtroPais: string = '';
  filtroFecha: number | null = null;
  
  filtroCaballosMin: number = 0;
  filtroCaballosMax: number = 2000;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe((data) => {
      this.coches = data;
    });
  }

  get marcas(): string[] { return [...new Set(this.coches.map(c => c.brand))].sort(); }
  get paises(): string[] { return [...new Set(this.coches.map(c => c.country))].sort(); }
  get fechas(): number[] { return [...new Set(this.coches.map(c => c.year))].sort((a, b) => b - a); }

  get cochesFiltrados(): Car[] {
    return this.coches.filter(c => {
      const okMarca = this.filtroMarca ? c.brand === this.filtroMarca : true;
      const okPais = this.filtroPais ? c.country === this.filtroPais : true;
      const okFecha = this.filtroFecha ? c.year == this.filtroFecha : true;
      
      const okCaballos = c.hp >= this.filtroCaballosMin && c.hp <= this.filtroCaballosMax;

      return okMarca && okPais && okFecha && okCaballos;
    });
  }

  borrarFiltros() {
    this.filtroMarca = '';
    this.filtroPais = '';
    this.filtroFecha = null;
    this.filtroCaballosMin = 0;
    this.filtroCaballosMax = 2000;
  }
}