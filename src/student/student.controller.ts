// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentDTO } from './dto/dto';
import { StudentService } from './student.service';
import { Student } from './interface/interface';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  async getStudent(): Promise<Student[]> {
    return await this.studentService.getStudent();
  }

  @Post()
  async createStudent(@Body() data: StudentDTO): Promise<Student> {
    return await this.studentService.createStudent(data);
  }

  @Get(':id')
  async getOneStudent(@Param('id') id: string): Promise<Student> {
    return await this.studentService.getOneStudent(id);
  }
  @Put(':id')
  // eslint-disable-next-line prettier/prettier
  async updateStudent(@Param('id') id: string, @Body() data: StudentDTO): Promise<Student> {
    return await this.studentService.updateStudent(id, data);
  }
  @Delete(':id')
  async deleteStudent(@Param('id') id: string): Promise<Student> {
    return await this.studentService.deleteStudent(id);
  }
}
