import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaQuestoesComponent } from './galeria-questoes.component';

describe('GaleriaquestoesComponent', () => {
  let component: GaleriaQuestoesComponent;
  let fixture: ComponentFixture<GaleriaQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaQuestoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
