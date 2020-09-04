import { Component } from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";

@Component({
  selector: 'aplicativo-nuevo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
  peliculas=[
    {
      id:1,
      url:'https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2020/07/spongebob.0.jpg?itok=mN99gkCL',
      descripcion:'Pelicula Animada',
      nombrePelicula:'BobEsponja',
    },
    {
      id:2,
      url:'https://www.pikaramagazine.com/wp-content/uploads/2019/11/2-870x399.jpg',
      descripcion:'Pelicula de Accion',
      nombrePelicula:'Joker',
    },
    {
      id:3,
      url:'https://cnet1.cbsistatic.com/img/l-xJp5JmvfZUGTVlfJ7O-wVVRTI=/940x0/2019/03/14/70b49c1d-0d3b-4b75-9225-b898b83cdc9a/avengers-endgame-poster-og-social-crop.jpg',
      descripcion:'Pelicula de Accion',
      nombrePelicula:'Avenger',
    },
    {
      id:4,
      url:'https://diariocorreo.pe/resizer/2JhDDbYi0BieO6Wb2Droll2H4BQ=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/ANABQASJ3RCEHG7UH7YSBBVBSY.jpg',
      descripcion:'Pelicula Animada',
      nombrePelicula:'Brolyu',
    }
  ];
  arregloNumeros = [1, 2, 3];
  // Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }
  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data) => { // THEN TRY
          console.log(data);
        },
        (error) => { // CATCH
          console.log(error);
        }
      );
  }
}
