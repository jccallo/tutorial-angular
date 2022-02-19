import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importacion de FormsModule para usar el ngModel
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaComponent } from './components/persona/persona.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  // componentes creados
  declarations: [
    AppComponent,
    EmpleadoComponent,
    PersonasComponent,
    PersonaComponent,
    UsuariosComponent
  ],
  // modulos usados
  imports: [
    BrowserModule, FormsModule
  ],
  // servicios creados
  providers: [UsuarioService],
  // componente raiz
  bootstrap: [AppComponent]
})
export class AppModule { }
