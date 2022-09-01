import {
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

class RelationDto {
  @IsString()
    name: string;

  @IsString()
    phoneNumber: string;

  @IsNumber()
    dagree: number;
}

export class CreateStudentDto {
  @IsString()
    name: string;

  @IsString()
    surname: string;

  @IsOptional()
  @IsString()
    classroom?: string;

  @IsDateString()
    birthdate: string;

  @IsNumber()
    gender: number;

  @IsObject()
    relationInfo: RelationDto;
}
