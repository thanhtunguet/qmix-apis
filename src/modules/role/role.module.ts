import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { DbModule } from '../db/db.module';

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [DbModule],
})
export class RoleModule {}
