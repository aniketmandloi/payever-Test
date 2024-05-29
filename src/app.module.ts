import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UsersModule],
  controllers: [UsersController],
  providers: [RabbitMQService],
})
export class AppModule {}
