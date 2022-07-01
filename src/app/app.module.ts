import { Module } from '@nestjs/common';
import { StduentController } from 'src/student/student.controller';
import { StudentService } from 'src/student/student.service';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { TeacherService } from 'src/teacher/teacher.service';

@Module({
  imports: [],
  controllers: [StduentController, TeacherController, StudentTeacherController],
  providers: [StudentService, TeacherService],
})
export class AppModule {}
