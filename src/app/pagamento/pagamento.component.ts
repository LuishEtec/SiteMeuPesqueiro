import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pagamento',
  imports: [HeaderComponent],
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {

   constructor(private router: Router) {}

  navigateToInstalar(): void {
    this.router.navigate(['/instalar']);
  }

}
