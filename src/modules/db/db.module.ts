import { Module } from '@nestjs/common';
import * as entities from '../../entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(Object.values(entities))],
  exports: [TypeOrmModule.forFeature(Object.values(entities))],
})
export class DbModule {}
