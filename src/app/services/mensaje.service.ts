import { Injectable } from '@angular/core';

// desde el decorador @Inyectable() hacemos que el servicio MensajeService se pueda usar desde la raiz
// osea estara disponible en todo el proyecto 
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor() { }

  // muestra un alert con un mensaje
  mostrarMensaje(mensaje: string): void {
    alert(mensaje);
  }

}
