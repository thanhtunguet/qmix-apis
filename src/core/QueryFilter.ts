import { ApiProperty } from '@nestjs/swagger';

export class QueryFilter {
  @ApiProperty({
    type: 'integer',
  })
  public skip?: number = 0;

  @ApiProperty({
    type: 'integer',
  })
  public take?: number = 10;

  @ApiProperty({
    type: 'string',
  })
  public orderBy?: string = '';

  @ApiProperty({
    type: 'string',
  })
  public orderType?: string = '';
}
