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
import { Gender } from 'src/entities';
import { GenderService } from './gender.service';
import { QueryFilter } from '../../core/QueryFilter';
import { GenderDto } from '../../dtos/gender.dto';

@ApiTags('Gender')
@Controller('api/gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Get()
  async list(@Query() filter: QueryFilter): Promise<GenderDto[]> {
    const genders = await this.genderService.list(filter);
    return genders.map((gender) => Object.assign(new GenderDto(), gender));
  }

  @Get('count')
  async count(@Query() filter: QueryFilter): Promise<number> {
    return this.genderService.count(filter);
  }

  @Get(':id')
  async getById(
    @Param('id') id: number,
    @Query('relations') relations: string[],
  ): Promise<GenderDto> {
    const queriedUser = await this.genderService.getById(id, relations);
    return Object.assign(new GenderDto(), queriedUser);
  }

  @Post()
  async create(@Body() gender: GenderDto): Promise<GenderDto> {
    const g = new Gender();
    Object.assign(g, gender);
    const newUser = await this.genderService.create(g);
    return Object.assign(new GenderDto(), newUser);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() gender: GenderDto,
  ): Promise<GenderDto> {
    const g = new Gender();
    Object.assign(g, gender);
    const updatedUser = await this.genderService.update(id, g);
    return Object.assign(new GenderDto(), updatedUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.genderService.delete(id);
  }
}
