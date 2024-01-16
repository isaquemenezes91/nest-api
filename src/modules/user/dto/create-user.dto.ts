import { IsStrongPassword, IsString, IsEmail } from 'class-validator';
import { UserCreatableInterface } from '../interfaces/user-creatable.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto implements UserCreatableInterface {
  @ApiProperty({
    type: 'string',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    type: 'string',
  })
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: 0,
  })
  password: string;

  @ApiProperty({
    type: 'string',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  license: string;
}
