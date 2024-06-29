import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DbModule } from '../db/db.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [DbModule],
})
export class UserModule {}
