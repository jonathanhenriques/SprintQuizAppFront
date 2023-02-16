import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralProvasComponent } from './mural-provas.component';

describe('MuralProvasComponent', () => {
  let component: MuralProvasComponent;
  let fixture: ComponentFixture<MuralProvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralProvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralProvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
