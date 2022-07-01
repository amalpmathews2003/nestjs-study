import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {
  createStudentDto,
  updateStudentDto,
  findStudentsResponseDto,
  studentsResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';
@Controller('students')
class StduentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStduent(): findStudentsResponseDto[] {
    return this.studentService.getStudents();
  }
  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return this.studentService.getStudentById(studentId);
  }
  @Post()
  createStudent(@Body() body: createStudentDto): studentsResponseDto {
    return this.studentService.createStudent(body);
  }
  @Put('/:studentId')
  updateStudentById(
    @Param('studentId') studentId: string,
    @Body() body: updateStudentDto,
  ) {
    return this.studentService.updateStudent(body, studentId);
  }
}
export { StduentController };
