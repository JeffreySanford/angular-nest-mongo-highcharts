import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsModule } from '../departments/departments.module';

@Module({
  imports: [
    DepartmentsModule,
    MongooseModule.forRoot(
      'mongodb+srv://teaadmin:p4ssw0rd@broken-leaf.h9pptcq.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}