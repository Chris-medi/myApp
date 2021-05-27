import { Component, OnInit } from '@angular/core';
import {Carros} from '../list.carro/list.carro'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {  
  
  listCarro : Array<{}>= [];

  newCarro = {
    placa:0,
    marca:"",
    modelo:"",
    nombreCliente:"",
    celularCliente:0,
    diaIngreso:""
    }
  constructor(private _carros:Carros) {
   }

  ngOnInit(): void {

  }
    addCarro(){
     this._carros.addNewCarro(this.newCarro)
    }


}
