import { Test, TestingModule } from '@nestjs/testing';
import { AgendController } from './agend.controller';
import { AgendService } from './agend.service';

describe('AgendController', () => {
  let controller: AgendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendController],
      providers: [AgendService],
    }).compile();

    controller = module.get<AgendController>(AgendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
