import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-inicio',
  imports: [HeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {}

  navigateToLoginprop(): void {
    this.router.navigate(['/loginprop']);
  }

  navigateToLoginfunc(): void {
    this.router.navigate(['/logincliente']);
  }
}
