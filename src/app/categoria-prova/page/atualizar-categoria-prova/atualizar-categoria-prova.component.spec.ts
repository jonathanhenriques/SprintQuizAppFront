import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCategoriaProvaComponent } from './atualizar-categoria-prova.component';

describe('AtualizarCategoriaProvaComponent', () => {
  let component: AtualizarCategoriaProvaComponent;
  let fixture: ComponentFixture<AtualizarCategoriaProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarCategoriaProvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarCategoriaProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
