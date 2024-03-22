import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerProvaComponent } from './fazer-prova.component';

describe('FazerProvaComponent', () => {
  let component: FazerProvaComponent;
  let fixture: ComponentFixture<FazerProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazerProvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazerProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
