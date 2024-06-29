import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({ type: 'bigint' })
  @IsNumber()
  id: bigint;

  @ApiProperty({ type: String, required: false })
  @IsString()
  code: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  name: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  description: string;
}
