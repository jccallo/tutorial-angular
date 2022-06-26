import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

// agregamos esta notacion porque inyectaremos un servicio
@Injectable()
export class DataService {

  // inyectamos el servicio HttpClient
  constructor(
    private httpClient: HttpClient
  ) { }

  // cargar usuarios
  cargarUsuarios() {
    return this.httpClient.get<Usuario[]>('https://listado-personas-30c5f-default-rtdb.firebaseio.com/datos.json');
  }

  // guardar usuarios
  guardarUsuarios(usuarios: Usuario[]): void {
    this.httpClient.put('https://listado-personas-30c5f-default-rtdb.firebaseio.com/datos.json', usuarios)
      .subscribe(
        response => console.log('Resultado de guardar usuarios:', response),
        error => console.log('Error al guardar usuarios:', error)
      );
  }

}
