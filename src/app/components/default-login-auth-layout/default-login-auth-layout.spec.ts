import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginAuthLayout } from './default-login-auth-layout';

describe('DefaultLoginAuthLayout', () => {
  let component: DefaultLoginAuthLayout;
  let fixture: ComponentFixture<DefaultLoginAuthLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLoginAuthLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLoginAuthLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
