import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  // propiedad usuarios
  // esta propiedad la usara el respectivo template de usuarios
  usuarios: Usuario[] = [];

  // hacemos la inyeccion de dependencia de UsuarioService
  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    // inicializamos la propiedad usuarios con la referencia a los usuario que trae la inyeccion
    this.usuarios = this.usuarioService.usuarios;
  }

  // recibe el nombre y el apellido desde el template
  capturarUsuario(nombre: string, apellido: string): void {
    // agrega un nuevo usuario a la inyeccion
    this.usuarioService.agregarUsuario(new Usuario(nombre, apellido));
  }

}
