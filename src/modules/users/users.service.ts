import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from 'generated/prisma';
@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async createUser(userData: CreateUserDto) {
    const newUser = { id: randomUUID(), ...userData };
    await this.prisma.user.create({
      data: newUser,
    });
    return newUser;
  }

  async updateUser(id: string, userData: Partial<UpdateUserDto>) {
    await this.prisma.user.update({
      where: { id },
      data: userData,
    });
  }

  async removeUser(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  async findUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
