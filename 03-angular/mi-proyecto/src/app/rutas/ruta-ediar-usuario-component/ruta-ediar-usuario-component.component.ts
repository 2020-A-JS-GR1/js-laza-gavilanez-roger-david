import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-ediar-usuario-component',
  templateUrl: './ruta-ediar-usuario-component.component.html',
  styleUrls: ['./ruta-ediar-usuario-component.component.css']
})
export class RutaEdiarUsuarioComponentComponent implements OnInit {
  usuario;
  mostrarFormulario = false;
  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta
      .subscribe(
        (parametros) => { // try
          const id = Number(parametros.id);
          const obsUsuario = this._usuarioService
            .obtenerUnoPorId(id);
          obsUsuario
            .subscribe(
              (usuario: any) => {
                this.usuario = usuario;
                this.llenarFormularioConDatosDeUsuario()
              },
              (error) => {
                console.error('Error', error);
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeUsuario() {
    this.mostrarFormulario = true;
  }

  editarUsuario(usuario) {
    const obsEditarUsuario = this._usuarioService.editar(usuario, this.usuario.id)
    obsEditarUsuario
      .subscribe(
        (datos) => {
          const url = ['/usuario', 'lista'];
          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

}
