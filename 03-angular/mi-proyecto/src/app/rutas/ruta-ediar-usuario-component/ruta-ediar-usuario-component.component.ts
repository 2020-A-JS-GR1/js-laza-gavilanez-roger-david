import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-ediar-usuario-component',
  templateUrl: './ruta-ediar-usuario-component.component.html',
  styleUrls: ['./ruta-ediar-usuario-component.component.css']
})
export class RutaEdiarUsuarioComponentComponent implements OnInit {
  usuario;
  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activateRoute.params;
    obsRuta
      .subscribe(
        (parametros) => {
          const id = Number(parametros.id);
          const obsUsuario = this._usuarioService
            .obtenerPorId(id);
          obsUsuario
            .subscribe(
              (usuario: any) => {
                this.usuario = usuario;
              },
              (error) =>{
                console.error('Error', error);
              }
            )
        }
      )
  }

}
