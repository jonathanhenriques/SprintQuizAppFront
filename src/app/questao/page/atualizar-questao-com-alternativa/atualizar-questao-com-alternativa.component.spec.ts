import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarQuestaoComAlternativaComponent } from './atualizar-questao-com-alternativa.component';

describe('AtualizarQuestaoComAlternativaComponent', () => {
  let component: AtualizarQuestaoComAlternativaComponent;
  let fixture: ComponentFixture<AtualizarQuestaoComAlternativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarQuestaoComAlternativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarQuestaoComAlternativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
