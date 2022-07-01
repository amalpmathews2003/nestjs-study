class findStudentsResponseDto {
  id: string;
  name: string;
  teacher: string;
}
class studentsResponseDto {
  id: string;
  name: string;
  teacher: string;
}


class createStudentDto {
  name: string;
  teacher: string;
}

class updateStudentDto {
  name: string;
  teacher: string;
}

export { createStudentDto, updateStudentDto, findStudentsResponseDto,studentsResponseDto };
