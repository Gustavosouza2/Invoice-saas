import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create-user')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/get-users')
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get('/get-user/:id')
  findUserById(@Param('id') id: string) {
    return this.usersService.findUserById(id);
  }

  @Patch('/update-user/:id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<CreateUserDto>
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete('/delete-user/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
