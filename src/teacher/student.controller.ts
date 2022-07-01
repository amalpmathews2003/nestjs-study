import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import {
  findStudentsResponseDto,
  studentsResponseDto,
} from '../student/dto/student.dto';
@Controller('teachers/:teacherId/students')
class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudentsOfTeacherById(
    @Param('teacherId') teacherId: string,
  ): findStudentsResponseDto[] {
    return this.studentService.getStudentsOfTeacherById(teacherId);
  }
  @Put('/:studentId')
  addStudentToTeacherById(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() Body,
  ): studentsResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}

export { StudentTeacherController };
