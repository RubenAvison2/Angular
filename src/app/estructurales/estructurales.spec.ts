import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estructurales } from './estructurales';

describe('Estructurales', () => {
  let component: Estructurales;
  let fixture: ComponentFixture<Estructurales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estructurales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estructurales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
