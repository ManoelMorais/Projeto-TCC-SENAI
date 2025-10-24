import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHomeLayout } from './default-home-layout';

describe('DefaultHomeLayout', () => {
  let component: DefaultHomeLayout;
  let fixture: ComponentFixture<DefaultHomeLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultHomeLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultHomeLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
