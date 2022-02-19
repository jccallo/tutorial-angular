import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  // obtenemos las referencias de los input marcados como #nombre y #apellido
  @ViewChild("nombre") nombre: ElementRef = {} as ElementRef;
  @ViewChild("apellido") apellido: ElementRef = {} as ElementRef;

  // listado de personas
  personas: Persona[] = [
    new Persona("Armando", "Morales")
  ];

  // guardamos el saludo que nos manda la persona
  saludo:string = "Aun no hay saludo de una persona de la lista";

  // agregar persona a la lista de personas
  agregarPersona(): void {
    // obtenemos los valores de los inputs usando: nativeElement.value
    this.personas.push(new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value));
  }

  // actualizamos el saludo que nos manda la persona
  actualizarSaludo(saludo: string):void {
    this.saludo = saludo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
