import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { CardComponent } from './components/card/card.component';
import { RealPipe } from './pipes/real.pipe';
import { ColecoesComponent } from './pages/colecoes/colecoes.component';
import { MeusjogosComponent } from './pages/meusjogos/meusjogos.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    CardComponent,
    RealPipe,
    ColecoesComponent,
    MeusjogosComponent,
    AjudaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
