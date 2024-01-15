import { PartialType } from '@nestjs/mapped-types';
import { CreateRentCarDto } from './create-rent-car.dto';

export class UpdateRentCarDto extends PartialType(CreateRentCarDto) {}
