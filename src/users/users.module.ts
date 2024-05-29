import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserSchema } from './schemas/user.schema';
import { RabbitMQModule } from '../rabbitmq/rabbitmq.module';
import { RabbitMQService } from '../rabbitmq/rabbitmq.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    RabbitMQModule, // Ensure RabbitMQModule is imported if needed
  ],
  controllers: [UsersController],
  providers: [UsersService, RabbitMQService],
  exports: [UsersService], // Export UsersService if it needs to be used outside this module
})
export class UsersModule {}
