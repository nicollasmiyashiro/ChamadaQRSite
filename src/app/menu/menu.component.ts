import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventos: any = [];
  usuario: any ={
    nvl: 3
  };

  onClick(){
    alert("usuario.nvl");
  }

}
