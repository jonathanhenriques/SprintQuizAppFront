import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralQuestoesComponent } from './mural-questoes.component';

describe('MuralQuestoesComponent', () => {
  let component: MuralQuestoesComponent;
  let fixture: ComponentFixture<MuralQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralQuestoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
