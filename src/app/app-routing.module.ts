import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { ColecoesComponent } from './pages/colecoes/colecoes.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MeusjogosComponent } from './pages/meusjogos/meusjogos.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'colecoes', component: ColecoesComponent },
  { path: 'meusjogos', component: MeusjogosComponent, canActivate: [AuthGuard] },
  { path: 'ajuda', component: AjudaComponent },
  { path: 'login', component: LoginComponent },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
