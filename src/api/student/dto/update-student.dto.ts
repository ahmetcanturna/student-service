import {
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

class RelationDto {
  @IsOptional()
  @IsString()
    name?: string;

  @IsOptional()
  @IsString()
    phoneNumber?: string;

  @IsOptional()
  @IsNumber()
    dagree?: number;
}

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
    name?: string;

  @IsOptional()
  @IsString()
    surname?: string;

  @IsOptional()
  @IsString()
    classroom?: string;

  @IsOptional()
  @IsDateString()
    birthdate?: string;

  @IsOptional()
  @IsNumber()
    gender?: number;

  @IsOptional()
  @IsObject()
    relationInfo?: RelationDto;
}
