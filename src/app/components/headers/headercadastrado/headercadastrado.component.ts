import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-headercadastrado',
  templateUrl: './headercadastrado.component.html',
  styleUrls: ['./headercadastrado.component.css']
})
export class HeadercadastradoComponent {
  imglogo: string = "Logo.png";
  usericon: string = "usericon.png";
  nomeUsuario: string = "Nome do Usuário";
  menuAberto: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  navigateToInicio(): void {
    this.router.navigate(['/inicio']);
  }

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  alterarInformacoes(): void {
    this.menuAberto = false;
    this.router.navigate(['/alterarinformacoes']);
  }

  sair(): void {
    this.menuAberto = false;
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
