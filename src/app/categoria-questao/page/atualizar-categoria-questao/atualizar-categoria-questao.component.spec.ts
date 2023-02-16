import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCategoriaQuestaoComponent } from './atualizar-categoria-questao.component';

describe('AtualizarCategoriaQuestaoComponent', () => {
  let component: AtualizarCategoriaQuestaoComponent;
  let fixture: ComponentFixture<AtualizarCategoriaQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarCategoriaQuestaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarCategoriaQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
