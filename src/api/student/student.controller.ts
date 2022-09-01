import {
  Controller, Post, Body, Param, Get, Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';

@ApiTags('student')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get(':id')
  @ApiOperation({
    summary: 'Gets student by id.',
  })
  async get(@Param('id') id: string) {
    return this.studentService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Creates student.',
  })
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Updates student.',
  })
  async update(
  @Body() updateStudentDto: UpdateStudentDto,
    @Param('id') id: string,
  ) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Post('filter')
  @ApiOperation({
    summary: 'Filters student by given parameters',
  })
  async filter(@Body() filterStudentDto: FilterStudentDto) {
    return this.studentService.filter(filterStudentDto);
  }

  // @Put('approve/:id')
  // @ApiOperation({
  //   summary: 'Approves application.',
  // })
  // async approve(
  // @Param('id') id: string,
  // ) {
  //   return this.studentService.approve(id);
  // }

  // @Put('reject/:id')
  // @ApiOperation({
  //   summary: 'Rejects application.',
  // })
  // async reject(
  // @Param('id') id: string,
  // ) {
  //   return this.studentService.reject(id);
  // }
}
