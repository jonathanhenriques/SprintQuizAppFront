import { TestBed } from '@angular/core/testing';

import { GuardaRespostasService } from './guarda-respostas.service';

describe('GuardaRespostasService', () => {
  let service: GuardaRespostasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardaRespostasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
