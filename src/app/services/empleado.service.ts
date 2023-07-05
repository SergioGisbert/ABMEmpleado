import { Injectable } from '@angular/core';
import {Empleado} from '../models/empleados'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
  { nombreCompleto: 'Lucas Martinez', correo: 'lmrtinez@gmail.com', telefono: 356183638,
  sexo: 'masculino', fechaIngreso: new Date(), estadoCivil: 'soltero' },
  { nombreCompleto: 'Rodrigo Aliaga', correo: 'rAliaga@gmail.com', telefono: 738238293,
  sexo: 'masculino', fechaIngreso: new Date(), estadoCivil: 'casado' },
  { nombreCompleto: 'Maria Gutierrez', correo: 'mguti@gmail.com', telefono: 749148205,
  sexo: 'femenino', fechaIngreso: new Date(), estadoCivil: 'soltero' },
  { nombreCompleto: 'Martina Dominguez', correo: 'mDominguez@gmail.com', telefono: 679340169,
  sexo: 'femenino', fechaIngreso: new Date(), estadoCivil: 'soltero' },
  { nombreCompleto: 'Pablo Santiago', correo: 'sanpa@gmail.com', telefono: 739341627,
  sexo: 'masculino', fechaIngreso: new Date(), estadoCivil: 'soltero' },
  { nombreCompleto: 'Lucia Osuna', correo: 'lonas@gmail.com', telefono: 70017249,
  sexo: 'femenino', fechaIngreso: new Date(), estadoCivil: 'casado' }
  ];

  constructor() { }

  getEmpleados(): Empleado[]{
    return this.listEmpleado.slice()
  }

  eliminarEmpleado(index:number){
    this.listEmpleado.splice(index,1);
  }

  agregarEmpleado(empleado: Empleado){
    this.listEmpleado.unshift(empleado)
  }

  getEmpleado(index: number): Empleado{
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, index: number): void{
    this.listEmpleado[index].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[index].correo = empleado.correo;
    this.listEmpleado[index].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[index].telefono = empleado.telefono;
    this.listEmpleado[index].estadoCivil = empleado.estadoCivil;
    this.listEmpleado[index].sexo = empleado.sexo;
  }
}
