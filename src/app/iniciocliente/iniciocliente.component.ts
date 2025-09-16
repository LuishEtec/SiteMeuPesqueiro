import { Component } from '@angular/core';
import { HeadercadastradoComponent } from "../components/headers/headercadastrado/headercadastrado.component";

interface Pesqueiro {
  nome: string;
  avaliacao: number;
  qtdAvaliacoes: number;
  foto: string;
  fotos: string[];
  endereco: string;
  informacoes: string;
  favorito?: boolean;
}
@Component({
  selector: 'app-iniciocliente',
  imports: [HeadercadastradoComponent],
  templateUrl: './iniciocliente.component.html',
  styleUrl: './iniciocliente.component.css'
})

export class InicioclienteComponent {
  pesqueiros: Pesqueiro[] = [
    {
      nome: 'Pesqueiro Cantareira',
      avaliacao: 4.3,
      qtdAvaliacoes: 667,
      foto: 'assets/pesqueiro1.jpg',
      fotos: [
        'assets/pesqueiro1.jpg',
        'assets/pesqueiro1_2.jpg',
        'assets/pesqueiro1_3.jpg'
      ],
      endereco: 'Av. Luís Carlos Gentile de Laet, 2500 - Tremembé, São Paulo - SP, 02378-000',
      informacoes: 'Pesqueiro localizado na zona norte de São Paulo dentro do Clube da Sabesp. Possui 3 lagos...'
    },
    {
      nome: 'Pesqueiro do Arnaldão',
      avaliacao: 4.3,
      qtdAvaliacoes: 988,
      foto: 'assets/pesqueiro2.jpg',
      fotos: [
        'assets/pesqueiro2.jpg',
        'assets/pesqueiro2_2.jpg'
      ],
      endereco: 'Rua Exemplo, 123 - Bairro, Cidade - SP, 01234-000',
      informacoes: 'Pesqueiro com várias opções de lazer e restaurante local...'
    }
  ];

  pesqueiroSelecionado: Pesqueiro = this.pesqueiros[0];
  fotoAtual: number = 0;

  selecionarPesqueiro(pesq: Pesqueiro) {
    this.pesqueiroSelecionado = pesq;
    this.fotoAtual = 0;
  }

  anteriorFoto() {
    if (this.fotoAtual > 0) {
      this.fotoAtual--;
    } else {
      this.fotoAtual = this.pesqueiroSelecionado.fotos.length - 1;
    }
  }

  proximaFoto() {
    if (this.fotoAtual < this.pesqueiroSelecionado.fotos.length - 1) {
      this.fotoAtual++;
    } else {
      this.fotoAtual = 0;
    }
  }

  favoritar(pesq: Pesqueiro) {
    pesq.favorito = !pesq.favorito;
  }
}
