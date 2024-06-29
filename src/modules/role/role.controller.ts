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
import { Role } from 'src/entities';
import { RoleService } from './role.service';
import { QueryFilter } from '../../core/QueryFilter';
import { RoleDto } from '../../dtos/role.dto';

@ApiTags('Role')
@Controller('api/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async list(@Query() filter: QueryFilter): Promise<RoleDto[]> {
    const roles = await this.roleService.list(filter);
    return roles.map((role) => Object.assign(new RoleDto(), role));
  }

  @Get('count')
  async count(@Query() filter: QueryFilter): Promise<number> {
    return this.roleService.count(filter);
  }

  @Get(':id')
  async getById(
    @Param('id') id: number,
    @Query('relations') relations: string[],
  ): Promise<RoleDto> {
    const queriedUser = await this.roleService.getById(id, relations);
    return Object.assign(new RoleDto(), queriedUser);
  }

  @Post()
  async create(@Body() role: RoleDto): Promise<RoleDto> {
    const g = new Role();
    Object.assign(g, role);
    const newUser = await this.roleService.create(g);
    return Object.assign(new RoleDto(), newUser);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() role: RoleDto,
  ): Promise<RoleDto> {
    const g = new Role();
    Object.assign(g, role);
    const updatedUser = await this.roleService.update(id, g);
    return Object.assign(new RoleDto(), updatedUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.roleService.delete(id);
  }
}
