import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { ERRORS } from '../../constants';
import { StudentRepositoryService } from './repository/student.repository.service';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';

@Injectable()
export class StudentService {
  constructor(
    private studentRepo: StudentRepositoryService,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = await this.studentRepo.create({ ...createStudentDto });

    return student;
  }

  async findById(id: string, fields?: string) {
    const student = await this.studentRepo.findById(id, fields);

    if (!student) {
      throw new BadRequestException(ERRORS.INVALID_STUDENT);
    }

    return student;
  }

  async filter(filterStudentDto: FilterStudentDto) {
    return this.studentRepo.filter(filterStudentDto);
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const {
      name,
      surname,
      birthdate,
      gender,
      classroom,
      relationInfo,
    } = updateStudentDto;

    const student = await this.studentRepo.findByIdAndUpdate(
      id,
      name,
      surname,
      birthdate,
      gender,
      classroom,
      relationInfo,
    );

    return student;
  }

  // async approved(id: string) {
  //   const application = await this.studentRepo.findByIdAndUpdatee(
  //     id,
  //     200,
  //   );

  //   return application;
  // }

  // async reject(id: string) {
  //   const application = await this.studentRepo.findByIdAndUpdatee(
  //     id,
  //     300,
  //   );

  //   return application;
  // }
}
