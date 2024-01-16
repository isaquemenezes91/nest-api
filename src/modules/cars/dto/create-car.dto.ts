import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateCarDto {
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
}
