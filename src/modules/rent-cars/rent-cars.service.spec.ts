import { Test, TestingModule } from '@nestjs/testing';
import { RentCarsService } from './rent-cars.service';

describe('RentCarsService', () => {
  let service: RentCarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentCarsService],
    }).compile();

    service = module.get<RentCarsService>(RentCarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
