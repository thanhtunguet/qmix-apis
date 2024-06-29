import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities';
import { UserService } from './user.service';
import { QueryFilter } from '../core/QueryFilter';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserDto } from '../dtos/user.dto';

@ApiTags('User')
@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async list(@Query() filter: QueryFilter): Promise<UserDto[]> {
    const users = await this.userService.list(filter);
    return users.map((user) => Object.assign(new UserDto(), user));
  }

  @Get('count')
  async count(@Query() filter: QueryFilter): Promise<number> {
    return this.userService.count(filter);
  }

  @Get(':id')
  async getById(
    @Param('id') id: number,
    @Query('relations') relations: string[],
  ): Promise<UserDto> {
    const queriedUser = await this.userService.getById(id, relations);
    return Object.assign(new UserDto(), queriedUser);
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<UserDto> {
    const newUser = await this.userService.create(user);
    return Object.assign(new UserDto(), newUser);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: UpdateUserDto,
  ): Promise<UserDto> {
    const updatedUser = await this.userService.update(id, user);
    return Object.assign(new UserDto(), updatedUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
