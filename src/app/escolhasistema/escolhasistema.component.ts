import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-escolha-sistema',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './escolhasistema.component.html',
  styleUrl: './escolhasistema.component.css'
})
export class EscolhaSistemaComponent {
  propicon: string = "propicon.png" 
  clienteicon: string = "clienteicon.png"

  selected: 'proprietario' | 'usuario' | null = null;

  constructor(private router: Router) {}

  select(value: 'proprietario' | 'usuario') {
    this.selected = value;
  }

  onContinue() {
    if (!this.selected) return;
    const target =
      this.selected === 'proprietario' ? '/proprietario' : '/usuario';
    this.router.navigateByUrl(target);
  }
}
