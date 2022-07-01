import { Injectable } from '@nestjs/common';
import { students } from 'src/data';
import {
  createStudentDto,
  findStudentsResponseDto,
  studentsResponseDto,
  updateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentService {
  private students = students;
  getStudents(): findStudentsResponseDto[] {
    return this.students;
  }
  getStudentById(id: string): findStudentsResponseDto {
    return this.students.find((student) => student.id === id);
  }
  createStudent(payload: createStudentDto): studentsResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  updateStudent(payload: updateStudentDto, id: string) {
    let updatedStudent: studentsResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === id) {
        updatedStudent = {
          id: id,
          ...payload,
        };
        return updatedStudent;
      } else {
        return student;
      }
    });

    this.students = updatedStudentList;
    return updatedStudent;
  }

  getStudentsOfTeacherById(id: string): studentsResponseDto[] {
    return this.students.filter((student) => student.teacher === id);
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): studentsResponseDto {
    let updatedStudent: studentsResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          teacher: teacherId,
          ...student,
        };
        return updatedStudent;
      } else {
        return student;
      }
    });

    this.students = updatedStudentList;
    return updatedStudent;
  }
}
