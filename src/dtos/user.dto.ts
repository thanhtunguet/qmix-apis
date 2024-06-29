import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ type: 'bigint' })
  @IsNumber()
  id: bigint;

  @ApiProperty({ type: String })
  @IsString()
  username: string;

  @ApiProperty({ type: String })
  @IsEmail()
  email: string;

  @ApiProperty({ type: Date })
  @IsDate()
  birthday: Date;

  @ApiProperty({ type: String })
  @IsString()
  avatar: string;

  @ApiProperty({ type: String })
  @IsString()
  displayName: string;

  @ApiProperty({ type: Date })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ type: Date })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({ type: Date })
  @IsDate()
  deletedAt: Date;

  @ApiProperty({ type: 'bigint' })
  @IsNumber()
  genderId: bigint;

  @ApiProperty({ type: 'bigint' })
  @IsNumber()
  roleId: bigint;
}
