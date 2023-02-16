import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCategoriaQuestaoComponent } from './cadastrar-categoria-questao.component';

describe('CadastrarCategoriaQuestaoComponent', () => {
  let component: CadastrarCategoriaQuestaoComponent;
  let fixture: ComponentFixture<CadastrarCategoriaQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCategoriaQuestaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCategoriaQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
