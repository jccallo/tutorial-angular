import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  template: `
    <h3>Perfil de usuario</h3>
      <ul>
        <li>Nombre: {{usuario.nombre}}</li>
        <li>Apellido: {{usuario.apellido}}</li>
      </ul>
      <button class="btn btn-success btn-sm" (click)="editarNombre()">¿Editar mi nimbre?</button>
      <br>
      Boton para ir a otra ruta: 
      <button type="button" class="btn btn-primary" (click)="irOtraRuta()">Ir a otra ruta</button>
  `,
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  // aqui se guarda el id de la ruta
  id: number = 0;

  indice: number = 0;

  // aqui se guarda el usuario que viajara al template
  usuario: Usuario = new Usuario();

  // usamos el servicio ActivatedRoute para rescatar los id
  // usamos el servicio usuarioService para usar el metodo obtenerUsuario()
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    // obtenemos el id que viene en la ruta
    this.id = this.route.snapshot.params["id"];

    // tambien podemos capturar parametros de consulta
    // todo en la url es de tipo string, y al llegar aqui, se hace un casteo implicito,
    // solo si es que se puede, para que el tipo coincida con lo declarado en la propiedad,
    // en este caso, indice llega como string, pero se puede guardar en una propiedad indice de tipo number
    this.indice = this.route.snapshot.queryParams["indice"];
    
    // buscamos al usuario usando usuarioService y se lo asignamos a la propiedad usuario que viajara a template
    this.usuario = this.usuarioService.obtenerUsuario(this.id);
  }

  // actualizo el nombre usando el servicio usuarioService y su metodo actualizarUsuario
  editarNombre(): void {
    let nombre = prompt("Ingresa tu nuevo nombre", "Forever");
    if (nombre != null) {
      this.usuarioService.actualizarUsuario(this.id, nombre);
      this.router.navigate(["listado"]);
    }
  }

  // ir a otra ruta que queremos
  irOtraRuta(): void {
    this.router.navigate([""]);
  }

}
