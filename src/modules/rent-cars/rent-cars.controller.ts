import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentCarsService } from './rent-cars.service';
import { CreateRentCarDto } from './dto/create-rent-car.dto';
import { UpdateRentCarDto } from './dto/update-rent-car.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rent Cars')
@Controller('rent-cars')
export class RentCarsController {
  constructor(private readonly rentCarsService: RentCarsService) {}

  @Post()
  create(@Body() createRentCarDto: CreateRentCarDto) {
    return this.rentCarsService.create(createRentCarDto);
  }

  @Get()
  findAll() {
    return this.rentCarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentCarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentCarDto: UpdateRentCarDto) {
    return this.rentCarsService.update(+id, updateRentCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentCarsService.remove(+id);
  }
}
