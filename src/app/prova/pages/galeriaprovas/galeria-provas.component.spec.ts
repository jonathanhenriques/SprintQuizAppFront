import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaProvasComponent } from './galeria-provas.component';

describe('GaleriaprovasComponent', () => {
  let component: GaleriaProvasComponent;
  let fixture: ComponentFixture<GaleriaProvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaProvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaProvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
