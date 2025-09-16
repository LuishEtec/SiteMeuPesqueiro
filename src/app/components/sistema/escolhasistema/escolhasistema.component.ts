import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeadercadastradoComponent } from "../../headers/headercadastrado/headercadastrado.component";

@Component({
  selector: 'app-escolha-sistema',
  imports: [HeadercadastradoComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './escolhasistema.component.html',
  styleUrl: './escolhasistema.component.css',
  standalone: true
})

export class EscolhaSistemaComponent {
  usericon: string = 'clienteicon.png'
  propicon: string = 'propicon.png'

  selecionado: 'pagamento' | 'iniciocliente' | null = null;

  constructor(private router: Router) {}

  selecionar(opcao: 'pagamento' | 'iniciocliente') {
    this.selecionado = opcao;
  }

  continuar() {
    if (this.selecionado === 'pagamento') {
      this.router.navigateByUrl('/pagamento');
    } else if (this.selecionado === 'iniciocliente') {
      this.router.navigateByUrl('/iniciocliente');
    }
  }
}
