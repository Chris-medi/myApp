import { Component, OnInit } from '@angular/core';
import {Carros} from '../list.carro/list.carro'

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  providers :[
    Carros
  ]
})
export class VehiculoComponent implements OnInit {

  public carros: Array<{}>



  constructor(private _carros:Carros) {
     this.carros =[{}]
   }

  ngOnInit():void {
    this.carros = this._carros.getCarros();
    console.log(this.carros)
  }

  public show: boolean = false
  mostrar(){
    if(this.show){
      this.show=false
    }else{
      this.show = true
    }
  }

}
