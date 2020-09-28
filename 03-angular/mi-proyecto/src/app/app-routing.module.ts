import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponentComponent} from "./rutas/ruta-lista-usuario-component/ruta-lista-usuario-component.component";
import {RutaCrearUsuarioComponentComponent} from "./rutas/ruta-crear-usuario-component/ruta-crear-usuario-component.component";
import {RutaEdiarUsuarioComponentComponent} from "./rutas/ruta-ediar-usuario-component/ruta-ediar-usuario-component.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {EstaLogeadoGuard} from "./servicios/guards/esta-logeado.guard";
import {EsSupervisorGuard} from "./servicios/guards/es-supervisor.guards";
import {EsAdministradorGuard} from "./servicios/guards/es-administrador.guard";

const routes: Routes = [
  {
    component: RutaInicioComponent,
    path: 'inicio'
  },
  {
    component: RutaLoginComponent, // COMPONENTE
    path: 'login' // URL
  },
  {
    component: RutaUsuarioComponent,
    path: 'usuario',
    canActivate:[
      EstaLogeadoGuard
    ],
    children: [
      {
        component: RutaListaUsuarioComponentComponent,
        path: 'lista',
      },
      {
        component: RutaCrearUsuarioComponentComponent,
        path: 'crear',
        canActivate: [
          EsSupervisorGuard
        ]
      },
      {
        component: RutaEdiarUsuarioComponentComponent,
        path: 'editar/:id',
        canActivate: [
          EsAdministradorGuard
        ]
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
