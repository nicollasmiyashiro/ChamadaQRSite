import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { ListaPresencaComponent } from './lista-presenca/lista-presenca.component';
import { MenuComponent } from './menu/menu.component';
import { CadastrarAlunosComponent } from './cadastrar-alunos/cadastrar-alunos.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPresencaComponent,
    MenuComponent,
    CadastrarAlunosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
