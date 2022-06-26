import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaComponent } from './components/persona/persona.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioService } from './services/usuario.service';
import { TeoriaComponent } from './components/teoria/teoria.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListadoComponent } from './components/listado/listado.component';

// importacion de FormsModule para usar el ngModel
import { FormsModule } from '@angular/forms';

// importacion de HttpClientModule para usar peticiones
import { HttpClientModule } from '@angular/common/http';

// importacion de RouterModule y Routes para usar rutas
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { DataService } from './services/data.service';

// guardamos las rutas
// por default si no ponemos la barra inclinada al inicio de cada nombre de ruta,
// este tomara la ruta raiz,  en este caso: localhost:42000/ + path
const appRoutes: Routes = [
  { path: "", component: TeoriaComponent },
  { path: "listado", component: ListadoComponent },
  { path: "perfil/:id/:otroId", component: PerfilComponent },
  { path: "error", component: ErrorComponent }
];

@NgModule({
  // componentes creados deben listarse aqui
  declarations: [
    AppComponent,
    EmpleadoComponent,
    PersonasComponent,
    PersonaComponent,
    UsuariosComponent,
    TeoriaComponent,
    PerfilComponent,
    ListadoComponent,
    ErrorComponent
  ],

  // modulos usados deben listarse aqui
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // importamos el modulo RouterModule y le indicamos donde guardaremos las rutas
    HttpClientModule // importacion de HttpClientModule para usar peticiones
  ],

  // servicios creados deben listarse aqui
  providers: [
    UsuarioService,
    DataService
  ],

  // componente raiz
  bootstrap: [AppComponent]
})
export class AppModule { }
