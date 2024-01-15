import { Module } from '@nestjs/common';
import { RentCarsService } from './rent-cars.service';
import { RentCarsController } from './rent-cars.controller';

@Module({
  controllers: [RentCarsController],
  providers: [RentCarsService],
})
export class RentCarsModule {}
