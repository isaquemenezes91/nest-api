import { Test, TestingModule } from '@nestjs/testing';
import { RentCarsController } from './rent-cars.controller';
import { RentCarsService } from './rent-cars.service';

describe('RentCarsController', () => {
  let controller: RentCarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentCarsController],
      providers: [RentCarsService],
    }).compile();

    controller = module.get<RentCarsController>(RentCarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
