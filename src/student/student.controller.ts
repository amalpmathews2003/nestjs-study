import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
class StduentController {
  @Get()
  getStduent() {
    return 'All students';
  }
  @Get('/:studentId')
  getStudentById() {
    return 'get student by id';
  }
  @Post()
  createStudent() {
    return 'create student';
  }
  @Put("/:studentId")
  updateStudentById(){
    return "update student by id"
  }
}
export { StduentController };
