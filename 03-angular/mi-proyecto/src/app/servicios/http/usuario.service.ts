// usuario.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsuarioService {
  url = 'http://localhost:1337'
  // Constructores en angular sirven para
  // Inyección de Dependencias
  constructor(
    // tslint:disable-next-line:variable-name
    private readonly _httpClient: HttpClient // servicioo
  ) {
  }
  traerTodos(){
    return this._httpClient.get(this.url + '/Usuario');
  }
  crear(usuario){
    return this._httpClient.post(
      this.url + '/Usuario', usuario
    );
  }
}