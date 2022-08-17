import { TestBed } from '@angular/core/testing';

import { QuestaoProvaService } from './questao-prova.service';

describe('QuestaoProvaService', () => {
  let service: QuestaoProvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestaoProvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
