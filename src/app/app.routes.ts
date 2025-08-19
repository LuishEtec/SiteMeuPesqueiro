import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { LoginComponent } from './login/login.component';
import { EscolhasistemaComponent } from './escolhasistema/escolhasistema.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EsqueceusenhaComponent } from './esqueceusenha/esqueceusenha.component';

export const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'pagamento', component: PagamentoComponent},
  {path: 'escolhasistema', component: EscolhasistemaComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'esqueceusenha', component: EsqueceusenhaComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
