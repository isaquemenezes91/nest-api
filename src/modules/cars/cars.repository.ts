import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarDTO } from './dto/car.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CarsRepository {

  constructor(
    @InjectRepository(Car)
    private repo:Repository<Car>
     ) {}

 
   async create(createCarDto: CreateCarDto):Promise<CarDTO> {
    try{
      const car = await this.repo.create(createCarDto);
      const dbCar = await this.repo.save(car);

      return plainToInstance(CarDTO,dbCar);
    }catch(e){
      throw new InternalServerErrorException('Error trying to create a car')
    }
  }

  async findAll():Promise<CarDTO[]> {
    try{
      const cars = await this.repo.find({});
      return plainToInstance(CarDTO,cars);
    }catch(e){
      throw new InternalServerErrorException('Error trying to find all cars')
    }
  }

  async findOne(id: string): Promise<CarDTO> {
    try{
      const car = await this.repo.findOneBy({id,})
      return plainToInstance(CarDTO,car)
    }catch(e){throw new InternalServerErrorException('ERROR')}
    
  }

  async update(id: string, updateCarDto: UpdateCarDto): Promise<UpdateCarDto>{
    try{
      const car = await this.findOne(id);
      const newCar: Car = {
        ...car,
        ...updateCarDto,
      };
      this.repo.save(newCar);
      return plainToInstance(CarDTO, newCar);
    }catch(e){throw new InternalServerErrorException('ERROR')}
    
  }

  async remove(id: string):Promise<void>{
    try{
      const car = await this.findOne(id);
      await this.repo.remove(car);
    }catch { throw new InternalServerErrorException('error when removing car') }
  }
}
