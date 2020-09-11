import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEdiarUsuarioComponentComponent } from './ruta-ediar-usuario-component.component';

describe('RutaEdiarUsuarioComponentComponent', () => {
  let component: RutaEdiarUsuarioComponentComponent;
  let fixture: ComponentFixture<RutaEdiarUsuarioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEdiarUsuarioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEdiarUsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
