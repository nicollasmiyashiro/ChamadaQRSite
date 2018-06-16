import { Component, OnInit } from '@angular/core';
import { NgxQRCodeModule } from "ngx-qrcode2";

@Component({
  selector: 'app-lista-presenca',
  templateUrl: './lista-presenca.component.html',
  styleUrls: ['./lista-presenca.component.css']
})
export class ListaPresencaComponent implements OnInit {

  alunos: any[] = [];
  sala: string;
  mostra: boolean = false;
  value: string = "adsasdas";

  gerarQR(){
    this.mostra = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
