import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  // propiedad usuarios
  // esta propiedad la usara el respectivo template de usuarios
  usuarios: Usuario[] = [];

  // hacemos la inyeccion de dependencia de UsuarioService
  constructor(private usuarioService: UsuarioService) {
  }

  // inicializamos la propiedad usuarios con la referencia a los usuario que trae la inyeccion
  ngOnInit(): void {
    this.usuarios = this.usuarioService.usuarios;
  }

}
