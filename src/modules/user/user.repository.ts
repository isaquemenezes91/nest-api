import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { plainToInstance } from 'class-transformer';



@Injectable()
export class UsersRepository {

  constructor(
    @InjectRepository(User)
    private repo: Repository<User>
  ) { }

  public async create(createUser: CreateUserDto): Promise<UserDto> {
    
    try {
      const user = this.repo.create(createUser);
      const dbUser = await this.repo.save(user);
      return plainToInstance(UserDto, dbUser);
    } catch (e) { throw e }
  }

  public async findAll(): Promise<UserDto[]> {
    try {
      const users = await this.repo.find({})
      return plainToInstance(UserDto, users);
    } catch (e) { throw new InternalServerErrorException('Error trying to find all users') }

  }

  public async findOne(id: string): Promise<UserDto> {
    try {
      const user = await this.repo.findOneBy({
        id,
      });
      return plainToInstance(UserDto, user)
    } catch (e) { throw new InternalServerErrorException('user not found') }

  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDto> {
    try {
      const user = await this.findOne(id);
      const newUser: User = {
        ...user,
        ...updateUserDto,
      };
      this.repo.save(newUser);
      return plainToInstance(UserDto, newUser);
    } catch { throw new InternalServerErrorException('Unable to update user') }
  }

  public async remove(id: string) :Promise<void> {
    try{
      const user = await this.findOne(id);
      await this.repo.remove(user);
    }catch { throw new InternalServerErrorException('error when removing user') }
  }
}