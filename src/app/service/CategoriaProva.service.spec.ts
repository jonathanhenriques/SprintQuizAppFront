/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoriaProvaService } from './CategoriaProva.service';

describe('Service: CategoriaProva', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaProvaService]
    });
  });

  it('should ...', inject([CategoriaProvaService], (service: CategoriaProvaService) => {
    expect(service).toBeTruthy();
  }));
});
