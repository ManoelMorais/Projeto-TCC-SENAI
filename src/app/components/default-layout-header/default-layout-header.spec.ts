import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutHeader } from './default-layout-header';

describe('DefaultLayoutHeader', () => {
  let component: DefaultLayoutHeader;
  let fixture: ComponentFixture<DefaultLayoutHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLayoutHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
