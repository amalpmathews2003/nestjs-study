import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
class StudentTeacherController {
  @Get()
  getStudentsOfTeacherById() {
    return 'getStudentsOfTeacherById';
  }
  @Put('/:studentId')
  addStudentToTeacherById() {
    return 'addStudentToTeacherById';
  }
}
  
export { StudentTeacherController };
