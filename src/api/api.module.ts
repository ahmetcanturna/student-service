import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [HealthModule, StudentModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
