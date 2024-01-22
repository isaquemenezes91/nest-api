import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";
import { CarCreatableInterface } from "../interfaces/car-creatable.interface";

export class CreateCarDto implements CarCreatableInterface {
    @ApiProperty({
        type:'string',
    })
    @IsString()
    model : string;
    @ApiProperty({
        type:'string',
    })
    @IsString()
    make: string;
    @ApiProperty({
        type:'number',
    })
    @IsInt()
    year: number;
    @IsInt()
    value: number;
}
