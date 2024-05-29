import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
