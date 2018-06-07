import { Component, OnInit } from '@angular/core';

import { Evento } from "../classes/Evento";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventos: Evento[] = [new Evento("103"), new Evento("104")];
  usuario: any ={
    nvl: 3
  };

  onClick(){
    alert("usuario.nvl");
  }

}
