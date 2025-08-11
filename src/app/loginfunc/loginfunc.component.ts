import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-loginfunc',
  imports: [HeaderComponent],
  templateUrl: './loginfunc.component.html',
  styleUrls: ['./loginfunc.component.css']
})
export class LoginfuncComponent {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email && this.senha) {
      console.log('Email:', this.email);
      console.log('Senha:', this.senha);
      this.router.navigate(['/home']);
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }
}
