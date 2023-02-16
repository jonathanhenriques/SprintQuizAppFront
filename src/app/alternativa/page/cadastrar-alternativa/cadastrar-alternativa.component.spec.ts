import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAlternativaComponent } from './cadastrar-alternativa.component';

describe('CadastrarAlternativaComponent', () => {
  let component: CadastrarAlternativaComponent;
  let fixture: ComponentFixture<CadastrarAlternativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAlternativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAlternativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
