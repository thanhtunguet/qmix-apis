import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_SCHEMA,
  DB_USER,
} from './config/dotenv';
import * as entities from './entities';
import { UserModule } from './modules/user/user.module';
import { DbModule } from './modules/db/db.module';
import { GenderModule } from './modules/gender/gender.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      schema: DB_SCHEMA,
      entities: Object.values(entities),
      synchronize: false, // Set to false in production
    }),
    DbModule,
    GenderModule,
    RoleModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
