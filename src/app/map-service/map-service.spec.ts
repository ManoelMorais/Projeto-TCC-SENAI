import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapService } from './map-service';

describe('MapService', () => {
  let component: MapService;
  let fixture: ComponentFixture<MapService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
