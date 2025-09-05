import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { CreateUserDto } from './dto/create-user.dto';
import { type User } from 'generated/prisma';

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(userData: CreateUserDto) {
    const newUser = { id: randomUUID(), ...userData };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, userData: Partial<CreateUserDto>) {
    const index = this.users.findIndex((i) => i.id === id);
    if (index === -1) return null;
    this.users[index] = { ...this.users[index], ...userData };
    return this.users[index];
  }

  removeUser(id: string) {
    const index = this.users.findIndex((i) => i.id === id);
    if (index === -1) return null;
    return this.users.splice(index, 1);
  }

  findAllUsers() {
    return this.users;
  }

  findUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
