import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({  
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchTerm: string = '';

  constructor(private carService: CarService) {}

  onSearchChange(){
    this.carService.updateSearch(this.searchTerm);
  }
}
