import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerJugador } from './obtener-jugador';

describe('ObtenerJugador', () => {
  let component: ObtenerJugador;
  let fixture: ComponentFixture<ObtenerJugador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObtenerJugador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtenerJugador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
