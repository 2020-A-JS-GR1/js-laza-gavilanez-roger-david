import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {
  @Input()
  urlImagen: string;
  @Input()
  descripcion: string;
  @Input()
  nombreBoton: string;
  @Output()
  eventoDioClicButton: EventEmitter<any> = new EventEmitter<boolean>();
  @Output()
  eventoDioClicImagen: EventEmitter<any> = new EventEmitter<boolean>();
  textoEjemplo = 'Roger';
  url = 'https://www.pikaramagazine.com/wp-content/uploads/2019/11/2-870x399.jpg';
  google = 'https://www.google.com';
  constructor() { }

  ngOnInit(): void {
  }
  ejemploFuncion(){
    alert('HOLA!');
  }
  eventoOnBlur(){
    console.log('Blur');
  }
  ejecutarEventDioClic(){
    this.eventoDioClicButton.emit(true);
  }
  ejecutarEventDioClicImagen(){
    this.eventoDioClicImagen.emit(true);
  }
}
