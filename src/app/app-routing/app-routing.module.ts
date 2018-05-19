import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAlunosComponent } from '../cadastrar-alunos/cadastrar-alunos.component';
import { ListaPresencaComponent } from '../lista-presenca/lista-presenca.component';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from '../menu/menu.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path: 'cadastrar-alunos', component: CadastrarAlunosComponent},
  {path: 'lista-presenca', component: ListaPresencaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'app', component: AppComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { 

}
