import { TestBed } from '@angular/core/testing';

import { CategoriaQuestaoService } from './categoria-questao.service';

describe('CategoriaQuestaoService', () => {
  let service: CategoriaQuestaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaQuestaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
