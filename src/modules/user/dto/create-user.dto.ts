import { IsStrongPassword, IsString, IsEmail } from "class-validator";
import { UserCreatableInterface } from "../interfaces/user-creatable.interface";


export class CreateUserDto implements UserCreatableInterface {
  @IsStrongPassword(
    {
        minLength:6,
        minLowercase:0,
        minNumbers:0,
        minSymbols:0,
        minUppercase:0
    }
  )  
  password: string;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsString()
  license: string;
}