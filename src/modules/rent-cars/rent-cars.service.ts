import { Injectable } from '@nestjs/common';
import { CreateRentCarDto } from './dto/create-rent-car.dto';
import { UpdateRentCarDto } from './dto/update-rent-car.dto';

@Injectable()
export class RentCarsService {
  create(createRentCarDto: CreateRentCarDto) {
    return 'This action adds a new rentCar';
  }

  findAll() {
    return `This action returns all rentCars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rentCar`;
  }

  update(id: number, updateRentCarDto: UpdateRentCarDto) {
    return `This action updates a #${id} rentCar`;
  }

  remove(id: number) {
    return `This action removes a #${id} rentCar`;
  }
}
