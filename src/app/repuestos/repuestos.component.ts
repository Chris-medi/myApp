import { Component, OnInit } from '@angular/core';
import { Repuestos} from '../list.repuesto/list.respuesto'

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {
 public repuestos:Array<{}>;
  public agregar : boolean = false 
  constructor() {
    this.repuestos = Repuestos
    console.log(this.repuestos)
   }

  ngOnInit(): void {
  }

  show(){
    if(this.agregar){
      this.agregar= false
    }else{
      this.agregar = true
    }
  }
  
}
