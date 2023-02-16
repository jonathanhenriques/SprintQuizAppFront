import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCategoriaProvaComponent } from './cadastrar-categoria-prova.component';

describe('CadastrarCategoriaProvaComponent', () => {
  let component: CadastrarCategoriaProvaComponent;
  let fixture: ComponentFixture<CadastrarCategoriaProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCategoriaProvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCategoriaProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
