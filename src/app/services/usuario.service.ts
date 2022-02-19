import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { MensajeService } from './mensaje.service';

// el servicio UsuarioService se agrego a la lista de providers en app.module.ts y no desde el decorador @Inyectable()
// pero necesita el decorador @Inyectable() para poder inyectar otros servicios dentro de el
@Injectable()
export class UsuarioService {

  // usuarios que tiene las futuras inyecciones de dependencia de UsuarioService
  usuarios: Usuario[] = [
    new Usuario("Armando", "Morales"),
    new Usuario("Angel", "Bautista")
  ];

  // inyecto la dependencia mensajeService en el constructor de UsuarioService
  constructor(private mensajeService: MensajeService) { }

  // agrega un usuario a la inyeccion de dependencia
  agregarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
    this.mensajeService.mostrarMensaje(`Usuario ${usuario.nombre} ${usuario.apellido} agregado correctamente`);
  }

}
