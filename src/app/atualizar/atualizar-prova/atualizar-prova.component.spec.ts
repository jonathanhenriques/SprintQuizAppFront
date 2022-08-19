import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarProvaComponent } from './atualizar-prova.component';

describe('AtualizarProvaComponent', () => {
  let component: AtualizarProvaComponent;
  let fixture: ComponentFixture<AtualizarProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarProvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
