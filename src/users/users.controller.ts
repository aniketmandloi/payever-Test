import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string) {
    return this.usersService.findById(userId);
  }

  @Get(':userId/avatar')
  async findAvatar(@Param('userId') userId: string) {
    return this.usersService.findAvatarById(userId);
  }

  @Delete(':userId/avatar')
  async deleteAvatar(@Param('userId') userId: string) {
    return this.usersService.deleteAvatar(userId);
  }
}
