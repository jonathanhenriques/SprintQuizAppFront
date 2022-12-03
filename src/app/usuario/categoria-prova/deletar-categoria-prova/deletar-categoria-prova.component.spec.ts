import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarCategoriaProvaComponent } from './deletar-categoria-prova.component';

describe('CategoriaProvaComponent', () => {
  let component: DeletarCategoriaProvaComponent;
  let fixture: ComponentFixture<DeletarCategoriaProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarCategoriaProvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarCategoriaProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
