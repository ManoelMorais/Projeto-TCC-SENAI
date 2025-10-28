import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnomalias } from './formulario-anomalias';

describe('FormularioAnomalias', () => {
  let component: FormularioAnomalias;
  let fixture: ComponentFixture<FormularioAnomalias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAnomalias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAnomalias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
