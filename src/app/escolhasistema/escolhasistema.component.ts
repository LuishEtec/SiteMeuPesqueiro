import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escolha-sistema',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './escolhasistema.component.html',
  styleUrl: './escolhasistema.component.css',
  standalone: true
})

export class EscolhaSistemaComponent {
  usericon: string = 'clienteicon.png'
  propicon: string = 'propicon.png'

  selecionado: 'pagamento' | 'cliente' | null = null;

  constructor(private router: Router) {}

  selecionar(opcao: 'pagamento' | 'cliente') {
    this.selecionado = opcao;
  }

  continuar() {
    if (this.selecionado === 'pagamento') {
      this.router.navigateByUrl('/pagamento');
    } else if (this.selecionado === 'cliente') {
      this.router.navigateByUrl('/cliente');
    }
  }
}
