import { Component } from '@angular/core';
import { HeadercadastradoComponent } from '../../headers/headercadastrado/headercadastrado.component';

interface Pesqueiro {
  id: string;
  nome: string;
  avaliacao?: string;
  fotos?: number;
  imagens?: string[];
  endereco?: string;
  descricao?: string;
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
    id: 'cantareira',
    nome: 'Pesqueiro Cantareira',
    avaliacao: '4.3 (667)',
    fotos: 1827,
    imagens: [
      'assets/cantareira1.jpg',
      'assets/cantareira2.jpg',
      'assets/cantareira3.jpg'
    ],
    endereco: 'Av. Luís Carlos Gentile de Laet, 2500 - Tremembé, São Paulo - SP, 02378-000',
    descricao: `Localizado na zona norte de São Paulo. Rua Luis Carlos Gentille de Laet. 2500 - Contato: 2204-7754`
  },
  {
    id: 'arnaldo',
    nome: 'Pesqueiro do Arnaldo',
    avaliacao: '4.3 (968)',
    fotos: 722,
    imagens: [
      'assets/arnaldo1.jpg',
      'assets/placeholder.jpg'
    ],
    endereco: '',
    descricao: ''
  }
];


  selected = this.pesqueiros[0];

  selectPesqueiro(id: string) {
    const found = this.pesqueiros.find(p => p.id === id);
    if (found) this.selected = found;
  }

  abrirMapa() {
    const q = encodeURIComponent(this.selected.endereco || this.selected.nome);
    window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, '_blank');
  }
}
