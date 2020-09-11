import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaUsuarioComponentComponent } from './ruta-lista-usuario-component.component';

describe('RutaListaUsuarioComponentComponent', () => {
  let component: RutaListaUsuarioComponentComponent;
  let fixture: ComponentFixture<RutaListaUsuarioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaUsuarioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaUsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
