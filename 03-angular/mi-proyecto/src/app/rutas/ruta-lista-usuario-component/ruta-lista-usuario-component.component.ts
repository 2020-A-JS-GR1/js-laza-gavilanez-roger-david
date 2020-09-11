import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-ruta-lista-usuario-component',
  templateUrl: './ruta-lista-usuario-component.component.html',
  styleUrls: ['./ruta-lista-usuario-component.component.css']
})
export class RutaListaUsuarioComponentComponent implements OnInit {
  arregloUsuarios = [];

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
) {

  }
    irEditarUsuario( id: number){
    const ruta = ['/usuario', 'editar', id];
    this._router.navigate(ruta);
  }
  eliminarUsuario(id: number) {
    const obsEliminar = this._usuarioService
      .eliminar(id);
    obsEliminar
      .subscribe(
        () => {
          // Borrando de la interfaz
          const indice = this.arregloUsuarios
            .findIndex(u => u.id === id);
          this.arregloUsuarios.splice(indice, 1);
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }

  ngOnInit(): void {
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (usuarios: any[]) => {
          this.arregloUsuarios = usuarios;
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

}
