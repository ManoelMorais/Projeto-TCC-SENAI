import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutFooter } from './default-layout-footer';

describe('DefaultLayoutFooter', () => {
  let component: DefaultLayoutFooter;
  let fixture: ComponentFixture<DefaultLayoutFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLayoutFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
