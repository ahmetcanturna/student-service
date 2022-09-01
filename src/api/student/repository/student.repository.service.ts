import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StudentEntity } from '../../../database/entitites/student.entity';
import { MODEL_PROVIDERS } from '../../../constants';
import { CreateStudentDto } from '../dto/create-student.dto';
import { FilterStudentDto } from '../dto/filter-student.dto';

@Injectable()
export class StudentRepositoryService {
  constructor(
    @Inject(MODEL_PROVIDERS.Student)
    private studentModel: Model<StudentEntity>,
  ) {}

  async create(studentDto: CreateStudentDto) {
    return (await this.studentModel.create(studentDto)).toObject();
  }

  async findById(id: string, fields?: string):Promise<StudentEntity> {
    return this.studentModel.findById(id).select(fields).lean().exec();
  }

  async filter(filterStudentDto: FilterStudentDto):Promise<Array<StudentEntity>> {
    const {
      name,
      surname,
      birthdate,
      gender,
      classroom,
    } = filterStudentDto;

    return this.studentModel.find({
      ...(name ? { name } : undefined),
      ...(surname ? { surname } : undefined),
      ...(birthdate ? { birthdate } : undefined),
      ...(gender ? { gender } : undefined),
      ...(classroom ? { classroom } : undefined),
    }).lean().exec();
  }

  async findByIdAndUpdate(
    id: string,
    name: string,
    surname: string,
    birthdate: string,
    gender: number,
    classroom: string,
    relationInfo: any,
  ):Promise<StudentEntity> {
    return this.studentModel
      .findByIdAndUpdate(
        id,
        {
          $set: {
            ...(name ? { name } : undefined),
            ...(surname ? { surname } : undefined),
            ...(birthdate ? { birthdate } : undefined),
            ...(gender ? { gender } : undefined),
            ...(classroom ? { classroom } : undefined),
            ...(relationInfo ? { relationInfo } : undefined),
          },
        },
        { new: true },
      )
      .lean()
      .exec();
  }

  async findByIdAndUpdatee(
    id: string,
    status : number,
  ):Promise<StudentEntity> {
    return this.studentModel
      .findByIdAndUpdate(
        id,
        {
          $set: {
            ...(status ? { status } : undefined),
          },
        },
        { new: true },
      )
      .lean()
      .exec();
  }
}
