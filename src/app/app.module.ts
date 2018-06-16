import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { ListaPresencaComponent } from './lista-presenca/lista-presenca.component';
import { MenuComponent } from './menu/menu.component';
import { CadastrarAlunosComponent } from './cadastrar-alunos/cadastrar-alunos.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgxQRCodeModule } from "ngx-qrcode2";


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
    AlertModule.forRoot(),
    AppRoutingModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
