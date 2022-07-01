import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers')
class TeacherController {
  @Get()
  getTeachers() {
    return 'all teachers';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return 'get teacher with id';
  }
}

export { TeacherController };
