import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginclienteComponent } from './logincliente/logincliente.component';
import { HeaderComponent } from './header/header.component';
import { LoginpropComponent } from './loginprop/loginprop.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

export const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'loginprop', component: LoginpropComponent},
  {path: 'logincliente', component: LoginclienteComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'pagamento', component: PagamentoComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
