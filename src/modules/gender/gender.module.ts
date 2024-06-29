import { Module } from '@nestjs/common';
import { GenderController } from './gender.controller';
import { GenderService } from './gender.service';
import { DbModule } from '../db/db.module';

@Module({
  controllers: [GenderController],
  providers: [GenderService],
  imports: [DbModule],
})
export class GenderModule {}
