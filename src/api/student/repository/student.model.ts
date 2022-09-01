import { Connection } from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { DATABASE_CONNECTIONS, MODEL_PROVIDERS } from '../../../constants';
import { StudentEntity } from '../../../database/entitites/student.entity';

export const StudentSchema = SchemaFactory.createForClass(StudentEntity);

export const StudentModel = {
  provide: MODEL_PROVIDERS.Student,
  useFactory: (connection: Connection) => connection.model(MODEL_PROVIDERS.Student, StudentSchema),
  inject: [DATABASE_CONNECTIONS.STUDENT.provider],
};
