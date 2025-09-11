import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './components/sistema/inicio/inicio.component';
import { HeaderComponent } from './components/headers/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InicioComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MeuPesqueiro';
}
