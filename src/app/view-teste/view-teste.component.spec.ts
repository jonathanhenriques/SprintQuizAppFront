import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTesteComponent } from './view-teste.component';

describe('ViewTesteComponent', () => {
  let component: ViewTesteComponent;
  let fixture: ComponentFixture<ViewTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
