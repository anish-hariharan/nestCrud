/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Anish:373414@cluster0.t3ru7uv.mongodb.net/Anish?retryWrites=true&w=majority'), StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
