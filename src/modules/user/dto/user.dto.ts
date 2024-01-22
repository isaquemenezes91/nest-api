import { Exclude, Expose } from "class-transformer";
import { UserInterface } from "../interfaces/user.interface";

@Exclude()
export class UserDto implements UserInterface {
  @Expose()
  id: string;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
  password: string;
  salt: string;
  @Expose()
  firstName: string;
  @Expose()
  lastName: string;
  email: string;
  @Expose()
  active: boolean;
  @Expose()
  license: string;
}