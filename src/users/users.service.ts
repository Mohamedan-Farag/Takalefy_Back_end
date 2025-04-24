import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from './user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [];

  private id = 1;

  async create(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser = {
      id: this.id++,
      ...dto,
      password: hashedPassword,
    };
    this.users.push(newUser);
    return newUser;
  }

  async findByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  async findById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
