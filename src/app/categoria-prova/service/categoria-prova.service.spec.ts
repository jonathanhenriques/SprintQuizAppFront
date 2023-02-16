import { TestBed } from '@angular/core/testing';

import { CategoriaProvaService } from './categoria-prova.service';

describe('CategoriaProvaService', () => {
  let service: CategoriaProvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaProvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
