import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UsersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
