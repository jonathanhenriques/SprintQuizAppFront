import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarQuestoesComponent } from './selecionar-questoes.component';

describe('SelecionarQuestoesComponent', () => {
  let component: SelecionarQuestoesComponent;
  let fixture: ComponentFixture<SelecionarQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarQuestoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
