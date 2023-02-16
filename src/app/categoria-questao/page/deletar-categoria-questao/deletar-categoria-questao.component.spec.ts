import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarCategoriaQuestaoComponent } from './deletar-categoria-questao.component';

describe('DeletarCategoriaQuestaoComponent', () => {
  let component: DeletarCategoriaQuestaoComponent;
  let fixture: ComponentFixture<DeletarCategoriaQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarCategoriaQuestaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarCategoriaQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
