import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servicios/http/usuario.service";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaListaUsuarioComponentComponent } from './rutas/ruta-lista-usuario-component/ruta-lista-usuario-component.component';
import { RutaCrearUsuarioComponentComponent } from './rutas/ruta-crear-usuario-component/ruta-crear-usuario-component.component';
import { RutaEdiarUsuarioComponentComponent } from './rutas/ruta-ediar-usuario-component/ruta-ediar-usuario-component.component';
import { FormularioUsuarioComponent } from './componentes/formularios/formulario-usuario/formulario-usuario.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent,
    RutaUsuarioComponent,
    RutaListaUsuarioComponentComponent,
    RutaCrearUsuarioComponentComponent,
    RutaEdiarUsuarioComponentComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    BrowserModule,// ->Importa el NgFor y el NGIF
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    // Importamos el HttpClient
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
