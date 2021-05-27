import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {Carros} from './list.carro/list.carro'
// import {Repuestos} from './list.repuesto/list.respuesto'

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import {Routing, appRoutingProviders} from '../router';
import { FormularioComponent } from './formulario/formulario.component';
import { RepuestosComponent } from './repuestos/repuestos.component'

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    VehiculoComponent,
    FormularioComponent,
    RepuestosComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    Carros,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
