import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { CarsRepository } from './cars.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Car])],
  controllers: [CarsController],
  providers: [CarsService, CarsRepository],
})
export class CarsModule {}
