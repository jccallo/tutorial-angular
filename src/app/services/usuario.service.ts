import { Injectable, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { MensajeService } from './mensaje.service';
import { DataService } from './data.service';

// el servicio UsuarioService se agrego a la lista de providers en app.module.ts y no desde el decorador @Inyectable()
// pero necesita el decorador @Inyectable() para poder inyectar otros servicios dentro de el
@Injectable()
export class UsuarioService {

  // IMPORTANTE: todos los inyecten el servicio de UsuarioService compartiran la misMa lista de usuarios
  // usuarios que tiene las futuras inyecciones de dependencia de UsuarioService
  usuarios: Usuario[] = [];

  constructor(
    private mensajeService: MensajeService, // inyecto la dependencia mensajeService en el constructor de UsuarioService
    private dataService: DataService // inyectamos dataService para usar firebase
  ) { }

  // agrega un usuario a la inyeccion de dependencia
  agregarUsuario(usuario: Usuario): void {
    this.mensajeService.mostrarMensaje(`Usuario ${usuario.nombre} ${usuario.apellido} agregado correctamente`);
    this.usuarios.push(usuario);

    // esto hace que lo guardemos en firebase lo que tenga el array usuarios
    this.dataService.guardarUsuarios(this.usuarios); // lo guardamos en firebase
  }

  // encuentra un usuario por el Id y lo devuelve
  obtenerUsuario(id: number): Usuario {
    return this.usuarios[id];
  }

  // actualiza al usuario solo en el nombre
  // se puede hacer lo miso si queremos hacer una especie de CRUD
  actualizarUsuario(id: number, nombre: string) {
    this.usuarios[id].nombre = nombre;
  }

  cargarUsuarios() {
    return this.dataService.cargarUsuarios();
  }

}
