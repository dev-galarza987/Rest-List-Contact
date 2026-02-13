import { Test, TestingModule } from '@nestjs/testing';
import { AgendService } from './agend.service';

describe('AgendService', () => {
  let service: AgendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendService],
    }).compile();

    service = module.get<AgendService>(AgendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
