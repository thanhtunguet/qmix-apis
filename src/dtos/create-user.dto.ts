import {
  IsEmail,
  IsOptional,
  IsString,
  IsDate,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ type: Date, required: false })
  @IsOptional()
  @IsDate()
  birthday?: Date;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  displayName?: string;

  @ApiProperty({ type: 'bigint' })
  @IsNumber()
  genderId: bigint;

  @ApiProperty({ type: 'bigint' })
  @IsNumber()
  roleId: bigint;
}
