// import { ModuleWithProviders, NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

 import {ModuleWithProviders, NgModule} from '@angular/core';
 import {Routes , RouterModule } from '@angular/router';
 
 import {RepuestosComponent} from './app/repuestos/repuestos.component'
import {VehiculoComponent} from './app/vehiculo/vehiculo.component';


const appRoutes : Routes = [
    {path: 'Vehiculos', component: VehiculoComponent },
    {path: 'Repuestos',component: RepuestosComponent}
];


export const appRoutingProviders :any[] = [];
export const Routing : ModuleWithProviders <any> = RouterModule.forRoot(appRoutes);