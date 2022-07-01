import { Injectable } from '@nestjs/common';
import { teachers } from 'src/data';
import { findTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  getTeachers(): findTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(id: string): findTeacherResponseDto {
    return this.teachers.find((teacher) => teacher.id === id);
  }
}
