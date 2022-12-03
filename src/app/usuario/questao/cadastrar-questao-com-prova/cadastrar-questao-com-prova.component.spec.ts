import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarQuestaoComProvaComponent } from './cadastrar-questao-com-prova.component';

describe('CadastrarQuestaoComProvaComponent', () => {
  let component: CadastrarQuestaoComProvaComponent;
  let fixture: ComponentFixture<CadastrarQuestaoComProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarQuestaoComProvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarQuestaoComProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
