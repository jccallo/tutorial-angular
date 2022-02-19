import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  // propiedades del empleado
  // se maneja 3 modificadores: public (default), private y protected
  nombre: string = "Armando";
  apellido: string = "Morales";
  private edad: number = 30;
  public empresa: string = "Google";
  estadoCivil: boolean = false;
  centroEstudios: string = "Idat";
  dni: boolean = true;

  // obtener edad
  getEdad(): number {
    return this.edad;
  }

  // actualizar estado civil
  actualizarEstadoCivil(event: Event): void {
    if ((<HTMLInputElement>event.target).value == "si") {
      this.estadoCivil = true;
    } else {
      this.estadoCivil = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}


