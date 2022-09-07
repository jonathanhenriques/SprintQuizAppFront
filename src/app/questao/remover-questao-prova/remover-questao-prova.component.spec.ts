import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverQuestaoProvaComponent } from './remover-questao-prova.component';

describe('RemoverQuestaoProvaComponent', () => {
  let component: RemoverQuestaoProvaComponent;
  let fixture: ComponentFixture<RemoverQuestaoProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverQuestaoProvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoverQuestaoProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
