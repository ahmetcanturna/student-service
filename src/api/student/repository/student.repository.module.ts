import { Module } from '@nestjs/common';
import { StudentModel } from './student.model';
import { StudentRepositoryService } from './student.repository.service';
import { StudentDatabaseModule } from '../../../database/student-database.module';

@Module({
  imports: [StudentDatabaseModule],
  providers: [StudentModel, StudentRepositoryService],
  exports: [StudentRepositoryService],
})
export class StudentRepositoryModule {}
