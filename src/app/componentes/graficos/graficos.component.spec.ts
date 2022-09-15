import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosComponent } from './graficos.component';
import { DadosService } from 'src/app/service/dados.service';

describe('DashboardComponent', () => {
  let component: GraficosComponent;
  let fixture: ComponentFixture<GraficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficosComponent],
      providers: [DadosService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
