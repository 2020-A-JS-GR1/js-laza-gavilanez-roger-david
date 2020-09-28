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
  busquedaModelo = '';

  constructor( // Inyecta dependendicas
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) {

  }


  irAEditarUsuario(id: number) {
    const ruta = ['/usuario', 'editar', id];
    // /usuario/editar/1
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
    this.filtrarArreglo();
  }

  filtrarArreglo() {
    const consulta = {
      or: [
        {
          nombre: {
            contains: this.busquedaModelo
          }
        },
        {
          cedula: {
            contains: this.busquedaModelo
          }
        }
      ]
    }
    const consultaString = 'where=' + JSON.stringify(consulta)

    const observableTraerTodos = this._usuarioService
      .traerTodos(this.busquedaModelo != '' ? consultaString : '');
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
