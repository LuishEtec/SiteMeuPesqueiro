import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../headers/header/header.component';

@Component({
  selector: 'app-inicio',
  imports: [HeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
  navigateToRegistrar(): void {
    this.router.navigate(['/registrar']);
  }
}
