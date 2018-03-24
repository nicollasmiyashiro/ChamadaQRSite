import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
