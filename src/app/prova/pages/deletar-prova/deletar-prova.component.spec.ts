import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarProvaComponent } from './deletar-prova.component';

describe('DeletarProvaComponent', () => {
  let component: DeletarProvaComponent;
  let fixture: ComponentFixture<DeletarProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarProvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
