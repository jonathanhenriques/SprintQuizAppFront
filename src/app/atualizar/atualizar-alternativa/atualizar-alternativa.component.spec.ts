import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAlternativaComponent } from './atualizar-alternativa.component';

describe('AtualizarAlternativaComponent', () => {
  let component: AtualizarAlternativaComponent;
  let fixture: ComponentFixture<AtualizarAlternativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarAlternativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarAlternativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
