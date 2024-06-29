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
import { Users } from 'src/entities';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('api/users')
export class UsersController {
  constructor(private readonly UsersService: UserService) {}

  @Get()
  async list(@Query() filter): Promise<Users[]> {
    return this.UsersService.list(filter);
  }

  @Get('count')
  async count(@Query() filter): Promise<number> {
    return this.UsersService.count(filter);
  }

  @Get(':id')
  async getById(
    @Param('id') id: number,
    @Query('relations') relations: string[],
  ): Promise<Users> {
    return this.UsersService.getById(id, relations);
  }

  @Post()
  async create(@Body() Users: Partial<Users>): Promise<Users> {
    return this.UsersService.create(Users);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() Users: Partial<Users>,
  ): Promise<Users> {
    return this.UsersService.update(id, Users);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.UsersService.delete(id);
  }
}
