import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarQuestaoComponent } from './atualizar-questao.component';

describe('AtualizarQuestaoComponent', () => {
  let component: AtualizarQuestaoComponent;
  let fixture: ComponentFixture<AtualizarQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarQuestaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
