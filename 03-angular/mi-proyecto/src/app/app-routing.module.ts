import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponentComponent} from "./rutas/ruta-lista-usuario-component/ruta-lista-usuario-component.component";
import {RutaCrearUsuarioComponentComponent} from "./rutas/ruta-crear-usuario-component/ruta-crear-usuario-component.component";
import {RutaEdiarUsuarioComponentComponent} from "./rutas/ruta-ediar-usuario-component/ruta-ediar-usuario-component.component";

const routes: Routes = [
  {
    component: RutaInicioComponent,
    path: 'inicio'
  },
  {
    component: RutaInicioComponent,
    path: 'login'
  },
  {
    component: RutaUsuarioComponent,
    path: 'usuario',
    children: [
      {
        component: RutaListaUsuarioComponentComponent,
        path: 'lista',
      },
      {
        component: RutaCrearUsuarioComponentComponent,
        path: 'crear',
      },
      {
        component: RutaEdiarUsuarioComponentComponent,
        path: 'editar/:id',
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
