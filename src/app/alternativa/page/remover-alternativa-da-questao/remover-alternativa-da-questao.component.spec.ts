import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverAlternativaDaQuestaoComponent } from './remover-alternativa-da-questao.component';

describe('RemoverAlternativaDaQuestaoComponent', () => {
  let component: RemoverAlternativaDaQuestaoComponent;
  let fixture: ComponentFixture<RemoverAlternativaDaQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverAlternativaDaQuestaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoverAlternativaDaQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
