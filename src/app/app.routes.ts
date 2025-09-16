import { Routes } from '@angular/router';
import { InicioComponent } from './components/sistema/inicio/inicio.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { PagamentoComponent } from './components/prop/pagamento/pagamento.component';
import { EscolhaSistemaComponent } from './components/sistema/escolhasistema/escolhasistema.component';
import { RegistrarComponent } from './components/sistema/registrar/registrar.component';
import { EsqueceusenhaComponent } from './components/sistema/esqueceusenha/esqueceusenha.component';
import { InstalarComponent } from './components/prop/instalar/instalar.component';
import { InicioclienteComponent } from './iniciocliente/iniciocliente.component';

export const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'pagamento', component: PagamentoComponent},
  {path: 'escolhasistema', component: EscolhaSistemaComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'esqueceusenha', component: EsqueceusenhaComponent},
  {path: 'instalar', component: InstalarComponent},
  {path: 'iniciocliente', component: InicioclienteComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
