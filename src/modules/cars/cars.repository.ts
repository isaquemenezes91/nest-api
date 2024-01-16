import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsRepository {

  public cars: Car[];
  constructor() {
    this.cars = [];
  }

  private convertToCar(createCar: CreateCarDto): Car {
    const cars = new Car();
    cars.model = createCar.model;
    cars.make = createCar.make;
    cars.year = createCar.year;
    return cars;
  }
  create(createCarDto: CreateCarDto):Car {
    const car = this.convertToCar(createCarDto);
    this.cars.push(car)
    return car;
  }

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car)=> car.id ===id)
    if(!car) throw new NotFoundException();
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: string) {
    return `This action removes a #${id} car`;
  }
}
