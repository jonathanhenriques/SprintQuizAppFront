import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoBarComponent } from './navegacao-bar.component';

describe('NavegacaoBarComponent', () => {
  let component: NavegacaoBarComponent;
  let fixture: ComponentFixture<NavegacaoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacaoBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacaoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
