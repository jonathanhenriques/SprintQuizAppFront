import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarAlternativaComponent } from './deletar-alternativa.component';

describe('DeletarAlternativaComponent', () => {
  let component: DeletarAlternativaComponent;
  let fixture: ComponentFixture<DeletarAlternativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarAlternativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarAlternativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
