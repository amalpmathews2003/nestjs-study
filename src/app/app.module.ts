import { Module } from '@nestjs/common';
import { StduentController } from 'src/student/student.controller';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
@Module({
  imports: [],
  controllers: [StduentController, TeacherController, StudentTeacherController],
})
export class AppModule {}
