import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
