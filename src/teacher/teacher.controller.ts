import { Controller, Get, Param } from '@nestjs/common';
import { findTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): findTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): findTeacherResponseDto {
    console.log(teacherId);
    return this.teacherService.getTeacherById(teacherId);
  }
}

export { TeacherController };
