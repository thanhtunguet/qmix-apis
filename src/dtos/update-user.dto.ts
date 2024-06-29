import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ type: 'bigint' })
  genderId?: bigint;

  @ApiPropertyOptional({ type: 'bigint' })
  roleId?: bigint;
}
