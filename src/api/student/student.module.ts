import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentRepositoryModule } from './repository/student.repository.module';
import { ServiceCallerModule } from '../../service-caller/service-caller.module';
import { CommonModule } from '../../common/common.module';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [
    StudentRepositoryModule,
    ServiceCallerModule,
    ConfigModule,
    CommonModule,
  ],
  exports: [StudentService],
})
export class StudentModule {}
