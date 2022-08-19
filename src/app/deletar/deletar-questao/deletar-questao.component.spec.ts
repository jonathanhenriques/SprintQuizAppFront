import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarQuestaoComponent } from './deletar-questao.component';

describe('DeletarQuestaoComponent', () => {
  let component: DeletarQuestaoComponent;
  let fixture: ComponentFixture<DeletarQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarQuestaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
