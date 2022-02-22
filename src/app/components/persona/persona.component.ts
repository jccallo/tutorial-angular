import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  // indicamos que recibira propiedades y declaramos e inicializamos dichos propiedades
  @Input() persona: Persona = new Persona();
  @Input() i: number = 0;

  // indicamos que emite el evento saludo
  @Output() saludo = new EventEmitter<string>();
  
  // setea el saludo desde el template persona cada vez que se cliclea el boton
  saludar(persona: Persona):void {
    this.saludo.emit(`Hola soy ${persona.nombre} ${persona.apellido}`);
  }

}
