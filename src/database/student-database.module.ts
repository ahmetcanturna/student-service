import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DATABASE_CONNECTIONS } from '../constants';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const dbConfig = configService.get<any>('mongodb.student');
        return { uri: dbConfig.url };
      },
      inject: [ConfigService],
      connectionName: DATABASE_CONNECTIONS.STUDENT.name,
    }),
  ],
})
export class StudentDatabaseModule {}
