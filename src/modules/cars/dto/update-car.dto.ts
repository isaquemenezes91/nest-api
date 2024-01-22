import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateCarDto{
    
    @IsString()
    @IsOptional()
    model : string;
    @IsString()
    @IsOptional()
    make: string;
    @IsInt()
    @IsOptional()
    year: number;
}
